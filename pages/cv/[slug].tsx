import { getSlagsPath, getSlagsProps } from 'lib/getSlags';
import CvPage from 'modules/cv/Cv';
import { GetStaticPropsContext } from 'next';

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
  
const CV = ({ slagProps }: Props) => (
    <CvPage slagProps={slagProps} />
);

export async function getStaticPaths() {
    return await getSlagsPath({ directoryPath: "content/cv" });
  
  }
  
  export async function getStaticProps({ params }: GetStaticPropsContext) {
    return await getSlagsProps({ directoryPath: "content/cv", params })
  }

export default CV
