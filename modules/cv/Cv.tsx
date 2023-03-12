import Head from "next/head";
import Nav from "components/nav/Nav";
import { MDXRemote } from "next-mdx-remote";
import styles from "./_cv.module.scss";

interface CV {
  compiledSource: string;
  scope: {
    title: string;
    slug: string;
    name: string;
  };
}

interface Props {
  slagProps: CV;
}

const Cv = ({ slagProps: { compiledSource, scope } }: Props) => {
  return (
    <>
      <Head>
        <title>{scope.title}</title>
      </Head>
      <div className={styles.container}>
        <Nav disableReturnToHome={true} name={scope.name} />
        <MDXRemote compiledSource={compiledSource} scope={scope} />
      </div>
    </>
  )
}


export default Cv
