import { getSlags } from "lib/getSlags";
import HomePage, {HomePageProps} from "components/home/HomePage";


const Home = ({ blogs, projects }: HomePageProps) => (
  <HomePage blogs={blogs} projects={projects}/>
)

export async function getStaticProps() {
  const blogs = await getSlags({ directoryPath: "content/blogs", type: 'blog' });
  const projects = await getSlags({ directoryPath: "content/projects", type: 'project' });

  return { props: { blogs, projects } };
}

export default Home;