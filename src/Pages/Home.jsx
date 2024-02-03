import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import ServiceSecondary from "../Components/Services/ServiceSecondary";
import Enterprice from "../Components/Enterprice/Enterprice";
import Blog from "../Components/Blogs/Blog";
import EnterpriceStart from "../Components/Enterprice/EnterpriceStart";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServiceSecondary />
      <Enterprice />
      <Blog />
      <EnterpriceStart />
    </>
  );
};

export default Home;
