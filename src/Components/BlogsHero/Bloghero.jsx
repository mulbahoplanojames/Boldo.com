import "/src/Components/BlogsHero/Bloghero.css";
import img8 from "../../assets/3.png";
import profile1 from "../../assets/profile1.png";
import "animate.css";

const Bloghero = () => {
  return (
    <>
      <div className="hero_blog">
        <p className="key animate__animated animate__fadeIn">Blog</p>
        <h1 className="blog_title animate__animated animate__fadeInDownBig">
          Thoughts and words
        </h1>

        <div className="hero_blog_wripper">
          <div className="hero_blog_content hero_blog_content_one animate__animated animate__fadeInRightBig">
            <img src={img8} alt="assets image" className="img" />
          </div>
          <div className="hero_blog_content hero_blog_content2 animate__animated animate__fadeInLeftBig">
            <p className="date">
              Category <span>Noverber, 22, 2023</span>
            </p>
            <h1 className="title">
              Pitch termsheet backing validation focus release
            </h1>
            <div className="blogger_wripper">
              <div className="img">
                <img src={profile1} alt="profile1" />
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
