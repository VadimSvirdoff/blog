import { getSlags } from "lib/getSlags";
import HomePage, {HomePageProps} from "modules/home/HomePage";


const Home = ({ blogs, projects, books }: HomePageProps) => (
  <HomePage blogs={blogs} projects={projects} books={books}/>
)

export async function getStaticProps() {
  const blogs = await getSlags({ directoryPath: "content/blogs", type: 'blog' });
  const projects = await getSlags({ directoryPath: "content/projects", type: 'project' });
  const books = await getSlags({ directoryPath: "content/books", type: 'book' });

  return { props: { blogs, projects, books } };
}

export default Home;