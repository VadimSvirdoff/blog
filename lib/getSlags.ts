import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { directoryReaderType, fileReaderType, getPathsType, getPropsType } from "./types";
import { fileDataMapper } from "utils/slag";

export const directoryReader: directoryReaderType = async ({ directoryPath, type }) => {
    const directory = path.join(process.cwd(), directoryPath);
    const fileNames = await fs.readdir(directory);

    return await Promise.all(
        fileNames.map((filename) => fileReader({ filename, directory, type }))
    );
};

const fileReader: fileReaderType = async ({ filename, directory, type }) => {
    const filePath = path.join(directory, filename);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data: {
        slug,
        title,
        publishedDate,
        titleType
    } } = matter(fileContent);

    if (
        typeof slug === "string" &&
        typeof title === "string" &&
        typeof publishedDate === "string" &&
        typeof titleType === "string"
    ) {
        return fileDataMapper({
            slug,
            title,
            publishedDate,
            titleType,
            filePath,
            type
        })
    } else {
        return Promise.reject();
    }
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