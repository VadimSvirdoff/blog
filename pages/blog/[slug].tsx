import { GetStaticPropsContext } from "next";
import { getPaths, getProps } from "lib/getSlags";
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
  return await getPaths({ directoryPath: "content/blogs" });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getProps({ directoryPath: "content/blogs", params })
}

export default Post;
