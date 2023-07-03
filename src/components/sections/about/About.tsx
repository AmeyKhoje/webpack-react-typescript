import AboutMe from 'assets/images/about_me.jpg';
import AboutLook from 'assets/images/about_look.jpg';

const About = () => {
  return (
    <div className="about fit-height fit-width o-hidden">
      <div className="about-container">
        <div className="about-me-title-flex">
          <div className="about-me-title-flex-heading">
            <h1 className="text-head font-montserrat">A Little About Me</h1>
          </div>
          <div className="about-me-title-flex-img">
            <img
              src={AboutMe}
              alt="amey, amey khoje, Amey Khoje, ameykhoje, AmeyKhoje"
            />
          </div>
        </div>
        <div className="about-me-description-flex">
          <div className="about-me-description-flex-text">
            <p className="font-montserrat">
              Experienced professional with proven knowledge of web and mobile
              based application with latest trends and techniques for
              optimization and speed in different domains. Aiming to leverage my
              abilities to successfully fill role and responsibilities.
            </p>
          </div>
          <div className="about-me-description-flex-img">
            <img
              src={AboutLook}
              alt="amey, amey khoje, Amey Khoje, ameykhoje, AmeyKhoje"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
