import { directoryReader } from "lib/getSlags";
import HomePage, {HomePageProps} from "modules/home/HomePage";


const Home = ({ blogs, projects, books }: HomePageProps) => (
  <HomePage blogs={blogs} projects={projects} books={books}/>
)

export async function getStaticProps() {
  const blogs = await directoryReader({ directoryPath: "content/blogs", type: 'blog' });
  const projects = await directoryReader({ directoryPath: "content/projects", type: 'project' });
  const books = await directoryReader({ directoryPath: "content/books", type: 'book' });

  return { props: { blogs, projects, books } };
}

export default Home;