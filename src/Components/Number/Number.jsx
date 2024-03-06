import "/src/Components/Number/NUmber.css";

const Number = () => {
  return (
    <>
      <div className="number">
        <p className="key_title">Our numbers</p>
        <h1 className="title">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <div className="number_wripper">
          <div className="number_content">
            <h2 className="num">100M</h2>
            <p className="description">Business and Marketing</p>
          </div>
          <div className="number_content">
            <h2 className="num">10.00</h2>
            <p className="description">Cool feature title</p>
          </div>
          <div className="number_content">
            <h2 className="num">140</h2>
            <p className="description">Software Engineering</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Number;
