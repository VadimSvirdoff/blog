import { GetStaticPropsContext } from "next";
import { getPaths, getProps } from "lib/getSlags";
import PostPage from 'modules/post/Post';
import { blogPath } from 'constants/constants';

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
  <PostPage slagProps={slagProps} />
)

export async function getStaticPaths() {
  return await getPaths({ directoryPath: blogPath });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getProps({ directoryPath: blogPath, params })
}

export default Post;
