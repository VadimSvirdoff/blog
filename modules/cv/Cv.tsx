import Head from "next/head";
import Nav from "components/nav/Nav";
import { MDXRemote } from "next-mdx-remote";
import styles from "./_cv.module.scss";

interface CV {
    compiledSource: string;
    scope: {
      title: string;
      slug: string;
    };
  }
  
  interface Props {
    slagProps: CV;
  }

const Cv = ({ slagProps }: Props ) => {
    return (
        <>
        <Head>
            <title>{slagProps.scope.title}</title>
        </Head>
        <div className={styles.container}>
            <Nav navLinkType="CUSTOM_NAV_LINK"/>
            <MDXRemote {...slagProps} />
        </div>
    </>
    )
}


export default Cv
