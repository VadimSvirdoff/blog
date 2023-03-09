import path from "path";
import { promises as fs } from "fs";
import { directoryReader } from "lib/getSlags";
import HomePage, { HomePageProps } from "modules/home/HomePage";
import { IFileProps } from "types/types";
import { folderName } from 'constants/constants';

const Home = (filesProps: HomePageProps) => (
  <HomePage {...filesProps} />
)

export async function getStaticProps() {
  let props = {} as { [key: string]: IFileProps[] };
  const directory = path.join(process.cwd(), folderName);
  const fileNames = await fs.readdir(directory);
  const directoriesData = fileNames.map(directoryName => ({ directoryPath: `${folderName}/${directoryName}`, type: directoryName }));

  const filesProps = await Promise.all(
    directoriesData.map(async ({ directoryPath, type }) => ({
      [type]: await directoryReader({ directoryPath, type })
    }))
  );

  filesProps.forEach(fileProps => props = { ...props, ...fileProps });
  return { props };
}

export default Home;