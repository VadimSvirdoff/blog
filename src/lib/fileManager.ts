import path from "path";
import { promises as fs } from "fs";
import { File } from "@/types/types";
import { folderName } from '@/constants/constants';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { directoryReaderType, fileReaderType, getPathsType, getPropsType } from "./types";


export const parseFilesInDirectories = async () => {
    // read fileNames /src/content folder -> [ 'blog', 'books', 'cv', 'project' ]
    const fileNames: string[] = await fs.readdir(folderName);

    const directoriesParsedData: { [fileName: string]: File[] }[] = await Promise.all(
        fileNames.map(async directoryName => {
            const directoryPath: string = `${folderName}/${directoryName}`;

            const fileNames: string[] = await fs.readdir(directoryPath);
            // get all files in dir and convert it to array of {slug,title,publishDate, titleType, filePath, type}
            const parsedData: File[] = await Promise.all(
                fileNames.map(async (filename) => {
                    const filePath = path.join(directoryPath, filename);
                    const fileContent = await fs.readFile(filePath, "utf8");
                    const { data: {
                        slug,
                        title,
                        publishedDate,
                        titleType
                    } } = matter(fileContent);

                    return { slug: `${directoryName}/${slug}`, title, publishedDate, titleType, filePath };
                })
            );
            // sort files by date
            parsedData.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

            return { [directoryName]: parsedData }
        })
    );
    // join array to single object
    const props: { [fileName: string]: File[] } = directoriesParsedData.reduce((acc, directoryParsedData) => ({ ...acc, ...directoryParsedData }));
    return { props };
}

export const directoryReader: directoryReaderType = async ({ directoryPath }) => {
    const fileNames = await fs.readdir(directoryPath);
    console.log(fileNames)

    return await Promise.all(
        fileNames.map((filename) => fileReader({ filename, directory: directoryPath }))
    );
};

const fileReader: fileReaderType = async ({ filename, directory }) => {
    const filePath = path.join(directory, filename);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data: {
        slug,
        title,
        publishedDate,
        titleType
    } } = matter(fileContent);

    return { slug, title, publishedDate, titleType, filePath };
}

export const getPaths: getPathsType = async ({ directoryPath }) => {
    const slugs = await directoryReader({ directoryPath })

    return {
        paths: slugs.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}

export const getProps: getPropsType = async ({ directoryPath, params }) => {
    const slugs = await directoryReader({ directoryPath })

    const match = slugs.find(({ slug }) => {
        return slug === params!.slug;
    });

    if (!match?.filePath) {
        return {
            notFound: true,
        }
    }

    const fileContent = await fs.readFile(match.filePath, "utf8");
    const { content, data } = matter(fileContent);
    const slagProps = await serialize(content, {
        scope: data,
    });

    return { props: { slagProps } };
}