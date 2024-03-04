import "/src/Components/Blogs/Blog.css";

const BlogCard = (props) => {
  const { head_image, date, description, blog_img, name } = props;

  return (
    <>
      <div className="blog_wripper">
        <div className="head">{head_image}</div>
        <div className="body">
          <p className="category">
            Category <span className="date">{date}</span>
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="bloger">
          <div className="img">{blog_img}</div>
          <p className="name">{name}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

//! Styles are in the Blog.css
