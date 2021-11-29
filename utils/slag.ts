import { IFileProps } from "types/types";

interface ISelectSlagPath extends IFileProps {
    type?: string;
    filePath: string
}

export type fileDataMapperType = (args: ISelectSlagPath) => { filePath: string, slug: string } | IFileProps;


export const fileDataMapper: fileDataMapperType = ({
    type,
    title,
    publishedDate,
    titleType,
    slug,
    filePath
}) => {
    if (!type) {
        return { slug, filePath };
    }

    return { slug: `/${type}/${slug}`, title, publishedDate, titleType, filePath };
}