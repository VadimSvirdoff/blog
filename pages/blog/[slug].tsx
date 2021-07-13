import { GetStaticPropsContext } from "next";
import { getSlagsPath, getSlagsProps } from "lib/getSlags";
import PostPage from 'modules/post/Post';

interface Blog {
  compiledSource: string;
  scope: {
    title: string;
    slug: string;
  };
}

interface Props {
  slagProps: Blog;
}

const Post = ({ slagProps }: Props) => (
  <PostPage data={slagProps} />
)

export async function getStaticPaths() {
  return await getSlagsPath({ directoryPath: "content/blogs" });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getSlagsProps({ directoryPath: "content/blogs", params })
}

export default Post;
