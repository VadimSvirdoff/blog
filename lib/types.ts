import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { IFileProps } from 'types/types';

export interface IDirectoryReader {
    directoryPath: string;
    type?: string;
}

export interface IGetPath {
    directoryPath: string;
}

export interface IGetProps {
    directoryPath: string;
    params: ParsedUrlQuery | undefined
}

export type directoryReaderType = (arg: IDirectoryReader) => Promise<IFileProps[]>;

interface IFileReader {
    filename: string,
    directory: string,
    type?: string
}

export type fileReaderType = (arg: IFileReader) =>  Promise<IFileProps>

export type getPathsType = (arg: IGetPath) => Promise<{ paths: { params: { slug: string; }; }[]; fallback: false; }>

export type getPropsType = (arg: IGetProps) => Promise<{
    notFound: boolean;
    props?: undefined;
} | {
    props: {
        slagProps: MDXRemoteSerializeResult<Record<string, unknown>>;
    };
    notFound?: undefined;
}>