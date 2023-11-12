import React from "react";
import "/src/Components/BlogNews/BlogNews.css";
import BlogCard from "../Blogs/BlogCard";
import BlogBtn from "../Buttons/BlogBtn";

const BlogNews = () => {
  return (
    <>
      <div className="blog_news">
        <hr />
        <h1 className="title">Latest News</h1>
        <div className="blog_news_wripper">
        <BlogCard
            head_image={<img src="src/assets/1.png" />}
            date={"Novmember 25, 2023"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src="src/assets/profile1.png" alt="" />}
            name={"Chandler Bing"}
          />
           <BlogCard
            head_image={<img src="src/assets/2B.png" />}
            date={"Novmember 25, 2023"}
            description={"Seed round direct mailling non-disclosure agreement graphical user interface rockstar"}
            blog_img={<img src="src/assets/profile2.png" alt="" />}
            name={"Rachel Green"}
          />
          
           <BlogCard
            head_image={<img src="src/assets/3B.png" />}
            date={"Novmember 25, 2023"}
            description={"Beta protostye sale ipad Gen-z marketing network effect value proposition"}
            blog_img={<img src="src/assets/profile3.png" alt="" />}
            name={"Monica Geller"}
          />
            <BlogCard
            head_image={<img src="src/assets/A5.png" />}
            date={"Novmember 25, 2022"}
            description={"eed round direct mailling non-disclosure agreement graphical user interface rockstar"}
            blog_img={<img src="src/assets/potter.png" alt="" />}
            name={" Bing Chandler"}
          />
           <BlogCard
            head_image={<img src="src/assets/1B.png" />}
            date={"Novmember 25, 2022"}
            description={"Beta protostye sale ipad Gen-z marketing network effect value proposition"}
            blog_img={<img src="src/assets/profile3.png" alt="" />}
            name={"Geller Monica"}
          />
         <BlogCard
            head_image={<img src="src/assets/2.png" />}
            date={"Novmember 25, 2022"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src="src/assets/albut.png" alt="" />}
            name={"Green Rachel"}
          />
        </div>
        <BlogBtn />
      </div>
    </>
  );
};

export default BlogNews;
