import React from 'react'
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import prism from "@mapbox/rehype-prism";
import { serialize } from "next-mdx-remote/serialize";
import { ParsedUrlQuery } from 'querystring';

interface GetSlagsPath {
    directoryPath: string;
}

interface GetSlagsProps {
    directoryPath: string;
    params: ParsedUrlQuery | undefined
}


export const getSlags = async ({ directoryPath }: GetSlagsPath) => {
    const directory = path.join(process.cwd(), directoryPath);
    const fileNames = await fs.readdir(directory);

    return await Promise.all(
        fileNames.map(async (filename) => {
            const filePath = path.join(directory, filename);
            const fileContent = await fs.readFile(filePath, "utf8");
            const { data } = matter(fileContent);
            const slug = `${data.slug}`;
            return { slug, filePath };
        })
    );
}

export const getSlagsPath = async ({ directoryPath }: GetSlagsPath) => {
    const slugs = await getSlags({directoryPath})

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
    const slugs = await getSlags({directoryPath})

    const match = slugs.find(({slug}) => {
        return slug === params!.slug;
    });

    const fileContent = await fs.readFile(match!.filePath, "utf8");
    const { content, data } = matter(fileContent);
    const slagProps = await serialize(content, {
        scope: data,
        mdxOptions: { rehypePlugins: [prism] },
    });

    return { props: { slagProps } };
}