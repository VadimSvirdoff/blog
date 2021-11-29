import { GetStaticPropsContext } from "next";
import { getPaths, getProps } from "lib/getSlags";
import PostPage from 'modules/post/Post';

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
  <PostPage data={slagProps}/>
)

export async function getStaticPaths() {
  return await getPaths({ directoryPath: "content/projects" });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getProps({ directoryPath: "content/projects", params })
}

export default Post;