import Head from "next/head";
import Nav from "components/nav/Nav";
import { MDXRemote } from "next-mdx-remote";
import Footer from "components/footer/Footer";
import styles from "./_post.module.scss";


interface Data {
    compiledSource: string;
    scope: {
      title: string;
      slug: string;
    };
  }
  
  interface Props {
    slagProps: Data;
  }

const Post = ({ slagProps: { compiledSource, scope } }: Props) => (
    <>
        <Head>
            <title>{scope.title} - Svyrydov Vadym</title>
        </Head>
        <div className={styles.container}>
            <Nav />
            <MDXRemote compiledSource={compiledSource} scope={scope} />
            <Footer />
        </div>
    </>
)

export default Post
