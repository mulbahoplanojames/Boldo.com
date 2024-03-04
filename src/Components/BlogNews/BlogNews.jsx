import { blogNews } from "../../Constant/Constant";
import BlogCard from "../BlogCard/BlogCard";
import BlogBtn from "../Buttons/BlogBtn";
import "/src/Components/BlogNews/BlogNews.css";

const BlogNews = () => {
  return (
    <>
      <div className="blog_news">
        <hr />
        <h1 className="title">Latest News</h1>
        <div className="blog_news_wripper">
          {blogNews.map((blognew) => {
            return (
              <BlogCard
                key={blognew.id}
                head_image={<img src={blognew.blogImage} className="img" />}
                date={blognew.date}
                description={blognew.description}
                blog_img={<img src={blognew.profileImage} alt="" />}
                name={blognew.name}
              />
            );
          })}
        </div>
        <BlogBtn />
      </div>
    </>
  );
};

export default BlogNews;
