import FooterHead from "../Components/FooterHead";
import Description from "../Sections/Description";
import FeaturedBlogPost from "../Sections/FeaturedBlogPost";
import Hero from "../Sections/Hero";
import MyProjects from "../Sections/MyProjects";
import Skills from "../Sections/Skills";
import Testimonials from "../Sections/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Skills />
      <MyProjects />
      <FeaturedBlogPost />
      <Testimonials />
      <FooterHead />
    </>
  );
}

export default Home;
