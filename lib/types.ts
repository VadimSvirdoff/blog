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

type mappedFileDataType  = IFileProps | {filePath: string, slug: string};

export type directoryReaderType = (arg: IDirectoryReader) => Promise<mappedFileDataType[]>;

interface IFileReader {
    filename: string,
    directory: string,
    type: string | undefined
}

export type fileReaderType = (arg: IFileReader) =>  Promise<mappedFileDataType>

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