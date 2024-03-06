import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import ServicesConnection from "../Components/ServiceConnection/ServiceConnection";
import Enterprice from "../Components/Enterprice/Enterprice";
import Blog from "../Components/Blogs/Blog";
import EnterpriceStart from "../Components/CalltoAction/EnterpriceStart";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServicesConnection />
      <Enterprice />
      <Blog />
      <EnterpriceStart />
    </>
  );
};

export default Home;
