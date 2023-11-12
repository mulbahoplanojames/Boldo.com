import React from "react";
import "/src/Components/OurStory/OurStory.css";
import ImageCard from "./ImageCard";

const OurStory = () => {
  return (
    <>
      <div className="galary">
        <div className="galary_wripper">
          <div className="galary_content content_one">
            <ImageCard image={<img src="src/assets/1B.png" alt="Man on phone"></img>}/>
            <ImageCard image={<img src="src/assets/3B.png" alt="Man near trash"></img>}/>
          </div>
          <div className="galary_content">
          <img src="src/assets/2B.png" alt="Team of developer" />          </div>
          <div className="galary_content content_one">
            <ImageCard image={<img src="src/assets/3c.png" alt="Team of developer"></img>}/>
            <ImageCard image={<img src="src/assets/5A.png" alt="Employee"></img>}/>
          </div>
        </div>


        <div className="our_story_wripper">
            <p className="key_title">Our Story</p>
            <h1 className="title">Infographic for mainstream crowdfunding <br /> with a  handshake theme.</h1>
            <p className="description">
            Angel investor conversion, entrepreneur's first-mover advantage. Handshake infographic, mass market crowdfunding iteration. Traction, stock user experience deployment beta, innovator incubator focus. Sales, user experience branding, growth hacking, holy grail monetization conversion, prototype stock network effects. Learning curve, network effects, return on investment, bootstrapping, business-to-consumer.
            </p>
        </div>
      </div>
    </>
  );
};

export default OurStory;
