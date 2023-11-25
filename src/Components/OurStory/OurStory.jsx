import React from "react";
import "/src/Components/OurStory/OurStory.css";
import ImageCard from "./ImageCard";
import storyimg1 from "../../assets/1B.png";
import storyimg2 from "../../assets/3B.png";
import storyimg3 from "../../assets/2B.png";
import storyimg4 from "../../assets/3c.png";
import storyimg5 from "../../assets/5A.png";

const OurStory = () => {
  return (
    <>
      <div className="galary">
        <div className="galary_wripper">
          <div className="galary_content content_one display-none-small">
            <ImageCard
              image={
                <img src={storyimg1} alt="Man on phone" className="img"></img>
              }
            />
            <ImageCard
              image={
                <img src={storyimg2} alt="Man near trash" className="img"></img>
              }
            />
          </div>
          <div className="galary_content long-img">
            <img src={storyimg3} alt="Team of developer" className="img" />{" "}
          </div>
          <div className="galary_content content_one">
            <ImageCard
              image={
                <img
                  src={storyimg4}
                  alt="Team of developer"
                  className="img"
                ></img>
              }
            />
            <ImageCard
              image={<img src={storyimg5} alt="Employee" className="img"></img>}
            />
          </div>
        </div>

        <div className="our_story_wripper">
          <p className="key_title">Our Story</p>
          <h1 className="title">
            Infographic for mainstream crowdfunding with a handshake theme.
          </h1>
          <p className="description">
            Angel investor conversion, entrepreneur's first-mover advantage.
            Handshake infographic, mass market crowdfunding iteration. Traction,
            stock user experience deployment beta, innovator incubator focus.
            Sales, user experience branding, growth hacking, holy grail
            monetization conversion, prototype stock network effects. Learning
            curve, network effects, return on investment, bootstrapping,
            business-to-consumer.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStory;
