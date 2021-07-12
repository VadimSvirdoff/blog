import React from 'react'
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import prism from "@mapbox/rehype-prism";
import { serialize } from "next-mdx-remote/serialize";
import { ParsedUrlQuery } from 'querystring';

interface GetSlags {
    directoryPath: string;
    type?: string;
}

interface GetSlagsPath {
    directoryPath: string;
}

interface GetSlagsProps {
    directoryPath: string;
    params: ParsedUrlQuery | undefined
}

interface SelectSlagPropsPath {
    type?: string;
    data: {
        slug?: string;
        title?: string;
        publishedDate?: string;
    },
    filePath?: string
}

const selectSlagPropsPath = ({ type, data, filePath }: SelectSlagPropsPath) => {
    if (!type) {
        const slug = `${data.slug}`;
        return { slug, filePath };
    }

    const { title, publishedDate } = data;
    const slug = `/${type}/${data.slug}`;
    return { slug, title, publishedDate };


}

export const getSlags = async ({ directoryPath, type }: GetSlags) => {
    const directory = path.join(process.cwd(), directoryPath);
    const fileNames = await fs.readdir(directory);

    return await Promise.all(
        fileNames.map(async (filename) => {
            const filePath = path.join(directory, filename);
            const fileContent = await fs.readFile(filePath, "utf8");
            const { data } = matter(fileContent);
            return selectSlagPropsPath({ data, filePath, type })
        })
    );
}

export const getSlagsPath = async ({ directoryPath }: GetSlagsPath) => {
    const slugs = await getSlags({ directoryPath })

    return {
        paths: slugs.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}


export const getSlagsProps = async ({ directoryPath, params }: GetSlagsProps) => {
    const slugs = await getSlags({ directoryPath })

    const match = slugs.find(({ slug }) => {
        return slug === params!.slug;
    });

    if(!match?.filePath ){
        return {
            notFound: true,
          }
    }

    const fileContent = await fs.readFile(match.filePath, "utf8");
    const { content, data } = matter(fileContent);
    const slagProps = await serialize(content, {
        scope: data,
        mdxOptions: { rehypePlugins: [prism] },
    });

    return { props: { slagProps } };
}