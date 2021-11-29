import { getPaths, getProps } from 'lib/getSlags';
import CvPage from 'modules/cv/Cv';
import { GetStaticPropsContext } from 'next';

interface Blog {
    compiledSource: string;
    scope: {
      title: string;
      slug: string;
      name: string;
    };
  }
  
  interface Props {
    slagProps: Blog;
  }
  
const CV = ({ slagProps }: Props) => (
    <CvPage slagProps={slagProps} />
);

export async function getStaticPaths() {
    return await getPaths({ directoryPath: "content/cv" });
  
  }
  
  export async function getStaticProps({ params }: GetStaticPropsContext) {
    return await getProps({ directoryPath: "content/cv", params })
  }

export default CV
