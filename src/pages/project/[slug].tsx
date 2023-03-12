import { GetStaticPropsContext } from "next";
import { getPaths, getProps } from "@/lib/fileManager";
import PostPage from '@/modules/post/Post';
import { projectPath } from '@/constants/constants';

interface Project {
  compiledSource: string;
  scope: {
    title: string;
    slug: string;
  };
}

interface Props {
  slagProps: Project;
}

const Post = ({ slagProps }: Props) => (
  <PostPage slagProps={slagProps} />
)

export async function getStaticPaths() {
  return await getPaths({ directoryPath: projectPath });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getProps({ directoryPath: projectPath, params })
}

export default Post;