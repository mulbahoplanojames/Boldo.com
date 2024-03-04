import BlogCard from "../BlogCard/BlogCard";
import BlogBtn from "../Buttons/BlogBtn";
import ImageCard from "../OurStory/ImageCard";
import storyimg1 from "../../assets/1B.png";
import storyimg2 from "../../assets/3B.png";
import storyimg3 from "../../assets/2B.png";
import storyimg4 from "../../assets/3c.png";
import storyimg5 from "../../assets/5A.png";
import storyimg6 from "../../assets/A5.png";
import storyimg7 from "../../assets/2.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/potter.png";
import profile5 from "../../assets/albut.png";
import "/src/Components/BlogNews/BlogNews.css";

const BlogNews = () => {
  return (
    <>
      <div className="blog_news">
        <hr />
        <h1 className="title">Latest News</h1>
        <div className="blog_news_wripper">
          <BlogCard
            head_image={<img src={storyimg4} className="img" />}
            date={"Novmember 25, 2023"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src={profile1} alt="" />}
            name={"Chandler Bing"}
          />
          <BlogCard
            head_image={<img src={storyimg3} className="img" />}
            date={"Novmember 25, 2023"}
            description={
              "Seed round direct mailling non-disclosure agreement graphical user interface rockstar"
            }
            blog_img={<img src={profile2} alt="" />}
            name={"Rachel Green"}
          />

          <BlogCard
            head_image={<img src={storyimg2} className="img" />}
            date={"Novmember 25, 2023"}
            description={
              "Beta protostye sale ipad Gen-z marketing network effect value proposition"
            }
            blog_img={<img src={profile3} alt="" />}
            name={"Monica Geller"}
          />
          <BlogCard
            head_image={<img src={storyimg6} className="img" />}
            date={"Novmember 25, 2022"}
            description={
              "eed round direct mailling non-disclosure agreement graphical user interface rockstar"
            }
            blog_img={<img src={profile4} alt="" />}
            name={" Bing Chandler"}
          />
          <BlogCard
            head_image={<img src={storyimg1} className="img" />}
            date={"Novmember 25, 2022"}
            description={
              "Beta protostye sale ipad Gen-z marketing network effect value proposition"
            }
            blog_img={<img src={profile3} alt="profile3" />}
            name={"Geller Monica"}
          />
          <BlogCard
            head_image={<img src={storyimg7} className="img" />}
            date={"Novmember 25, 2022"}
            description={" Pitch termsheet backing validation focus release"}
            blog_img={<img src={profile5} alt="profile5" />}
            name={"Green Rachel"}
          />
        </div>
        <BlogBtn />
      </div>
    </>
  );
};

export default BlogNews;
