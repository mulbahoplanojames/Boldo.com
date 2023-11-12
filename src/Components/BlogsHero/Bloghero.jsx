import React from "react";
import "/src/Components/BlogsHero/Bloghero.css";

const Bloghero = () => {
  return (
    <>
      <div className="hero_blog">
        <p className="key">Blog</p>
        <h1 className="blog_title">Thoughts and words</h1>

        <div className="hero_blog_wripper">
          <div className="hero_blog_content">
            <img src="src/assets/3.png" alt="" />
          </div>
          <div className="hero_blog_content hero_blog_content2">
            <p className="date">
              Category <span>Noverber, 22, 2023</span>
            </p>
            <h1 className="title">
              Pitch termsheet backing validation focus release
            </h1>
            <div className="blogger_wripper">
              <div className="img">
                <img src="src/assets/profile1.png" alt="profile1" />
              </div>
              <p className="name">Chandler Bing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloghero;
