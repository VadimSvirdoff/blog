import { GetStaticPropsContext } from "next";
import { getSlagsPath, getSlagsProps } from "lib/getSlags";
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
  return await getSlagsPath({ directoryPath: "content/projects" });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getSlagsProps({ directoryPath: "content/projects", params })
}

export default Post;