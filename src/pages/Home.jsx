import HorizontalScroll from "../components/HorizontalScroll";
import Carousel from "../components/Carosule";
import Features from "../components/Features";
import GymFitnessSection from "../components/GymFitnessSection";
import BlogPosts from "../components/Blogposts";
import TopRatedProducts from "../components/TopRatedProducts";
const Home = () => {
  return (
    <div>
    <HorizontalScroll/>
    <Carousel/>
    <Features/>
    <GymFitnessSection/>
    <BlogPosts/>
    <TopRatedProducts/>
    </div>
  );
};

export default Home;
