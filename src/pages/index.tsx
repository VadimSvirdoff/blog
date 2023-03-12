import { parseFilesInDirectories } from "@/lib/fileManager";
import HomePage, { HomePageProps } from "@/modules/home/HomePage";

const Home = (filesProps: HomePageProps) => (
  <HomePage {...filesProps} />
)

export async function getStaticProps() {
  return parseFilesInDirectories();
}

export default Home;