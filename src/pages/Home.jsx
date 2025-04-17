import HorizontalScroll from "../components/HorizontalScroll";
import Features from "../components/Features";
import GymFitnessSection from "../components/GymFitnessSection";
import BlogPosts from "../components/Blogposts";
import TopRatedProducts from "../components/TopRatedProducts";
import Section1 from "../components/Section1";
const Home = () => {
  return (
    <div>
    <HorizontalScroll/>
    <Section1/>
    <Features/>
    <GymFitnessSection/>
    <BlogPosts/>
    <TopRatedProducts/>

    </div>
  );
};

export default Home;
