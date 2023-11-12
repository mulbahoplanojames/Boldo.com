import React from "react";

const BlogCard = (props) => {
  return (
    <>
      <div className="blog_wripper">
        <div className="head">{props.head_image}</div>
        <div className="body">
          <p className="category">
            Category <span className="date">{props.date}</span>
          </p>
          <p className="description">{props.description}</p>
        </div>
        <div className="bloger">
          <div className="img">{props.blog_img}</div>
          <p className="name">{props.name}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

// Styles are in the Blog.css
