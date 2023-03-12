import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { File } from '@/types/types';

export interface DirectoryReader {
    directoryPath: string;
}

export interface GetPath {
    directoryPath: string;
}

export interface GetProps {
    directoryPath: string;
    params: ParsedUrlQuery | undefined
}

export type directoryReaderType = (arg: DirectoryReader) => Promise<File[]>;

interface FileReader {
    filename: string,
    directory: string,
}

export type fileReaderType = (arg: FileReader) => Promise<File>

export type getPathsType = (arg: GetPath) => Promise<{ paths: { params: { slug: string; }; }[]; fallback: false; }>

export type getPropsType = (arg: GetProps) => Promise<{
    notFound: boolean;
    props?: undefined;
} | {
    props: {
        slagProps: MDXRemoteSerializeResult<Record<string, unknown>>;
    };
    notFound?: undefined;
}>