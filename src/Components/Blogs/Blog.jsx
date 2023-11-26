import React from "react";
import "/src/Components/Blogs/Blog.css";
import BlogCard from "./BlogCard";
import BlogBtn from "../Buttons/BlogBtn";
import { Link } from "react-router-dom";
import blogimg1 from "../../assets/1.png";
import profile1 from "../../assets/profile1.png";
import blogimg2 from "../../assets/2B.png";
import profile2 from "../../assets/profile2.png";
import blogimg3 from "../../assets/3B.png";
import profile3 from "../../assets/profile3.png";
import "animate.css";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <p className="main_title">Our Blog</p>
        <h1 className="title animate__animated  animate__fadeInRightBig">
          Value proposition accelerator products <br /> management venture
        </h1>

        <div className="blogs_wripper">
          <BlogCard
            head_image={<img src={blogimg1} className="img" />}
            date={"Novmember 25, 2022"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src={profile1} alt="" />}
            name={"Chandler Bing"}
          />
          <BlogCard
            head_image={<img src={blogimg2} className="img" />}
            date={"Novmember 25, 2022"}
            description={
              " Seed round direct mailling non-disclosure agreement graphical user interface rockstar"
            }
            blog_img={<img src={profile2} alt="profile2" />}
            name={"Rachel Green"}
          />
          <BlogCard
            head_image={<img src={blogimg3} className="img" />}
            date={"October 25, 2022"}
            description={
              "Beta protostye sale ipad Gen-z marketing network effect value proposition"
            }
            blog_img={<img src={profile3} alt="profile3" />}
            name={"Monica Geller"}
          />
        </div>

        <Link to="/blogs">
          <BlogBtn />
        </Link>
      </div>
    </>
  );
};

export default Blog;
