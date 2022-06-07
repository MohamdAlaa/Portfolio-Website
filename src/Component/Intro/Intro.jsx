import "./Intro.css";
import Me from "../../Img/Me.jpg"


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1>Mohamed Alaa</h1>
          <div className="i-tittle">
            <div className="i-tittle-wrapper">
              <div className="i-tittle-item">Front End Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores. <br/>Talented and CreativeFront End Developer skilled at designing 
            sitesand writing clean code. Work Experience Matched content tocustomer specifications
            through skilled design, writing and editing.<br/>Created innovative designs with use of programming
            languages,Framework and tools Developed and deployed successfull
          </p>

        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>

    </div>
  );
};

export default Intro;