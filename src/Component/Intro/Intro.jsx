import "./Intro.css";
//import Me from "../../Img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Mohamed Alaa Elmenyawe</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front End Develpoer</div>
              <div className="i-title-item">Gamer</div>
              <div className="i-title-item">Freelancer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
            </div>
      <div className="i-right">
        <div className="i-bg"></div>
        
      </div>
    </div>
  );
};

export default Intro;