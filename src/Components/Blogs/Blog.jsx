import React from "react";
import "/src/Components/Blogs/Blog.css";
import BlogCard from "./BlogCard";
import BlogBtn from "../Buttons/BlogBtn";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <p className="main_title">Our Blog</p>
        <h1 className="title">
          Value proposition accelerator product <br /> management venture
        </h1>

        <div className="blogs_wripper">
          <BlogCard
            head_image={<img src="src/assets/1.png" />}
            date={"Novmember 25, 2022"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src="src/assets/profile1.png" alt="" />}
            name={"Chandler Bing"}
          />
          <BlogCard
            head_image={<img src="src/assets/2B.png" />}
            date={"Novmember 25, 2022"}
            description={
              " Seed round direct mailling non-disclosure agreement graphical user interface rockstar"
            }
            blog_img={<img src="src/assets/profile2.png" alt="" />}
            name={"Rachel Green"}
          />
          <BlogCard
            head_image={<img src="src/assets/3B.png" />}
            date={"October 25, 2022"}
            description={
              "Beta protostye sale ipad Gen-z marketing network effect value proposition"
            }
            blog_img={<img src="src/assets/profile3.png" alt="" />}
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
