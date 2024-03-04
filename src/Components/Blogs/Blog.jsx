import "/src/Components/Blogs/Blog.css";
import BlogCard from "../BlogCard/BlogCard";
import BlogBtn from "../Buttons/BlogBtn";
import { Link } from "react-router-dom";
import "animate.css";
import { homeBlogs } from "../../Constant/Constant";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <p className="main_title">Our Blog</p>
        <h1 className="title animate__animated  animate__fadeInRightBig">
          Value proposition accelerator products <br /> management venture
        </h1>

        <div className="blogs_wripper">
          {homeBlogs.map((homeblog) => {
            return (
              <BlogCard
                key={homeblog.id}
                head_image={<img src={homeblog.blogImage} className="img" />}
                date={homeblog.date}
                description={homeblog.description}
                blog_img={
                  <img
                    src={homeblog.profileImage}
                    alt="Profile images for blog"
                  />
                }
                name={homeblog.name}
              />
            );
          })}
        </div>

        <Link to="/blogs">
          <BlogBtn />
        </Link>
      </div>
    </>
  );
};

export default Blog;
