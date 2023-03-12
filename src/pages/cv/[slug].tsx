import { getPaths, getProps } from '@/lib/fileManager';
import CvPage from '@/modules/cv/Cv';
import { GetStaticPropsContext } from 'next';
import { cvPath } from '@/constants/constants';

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
  return await getPaths({ directoryPath: cvPath });

}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return await getProps({ directoryPath: cvPath, params })
}

export default CV
