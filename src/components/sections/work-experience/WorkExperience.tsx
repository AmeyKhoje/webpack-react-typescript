import WorkExperienceContent from 'src/components/work-experience-content/WorkExperienceContent';
import ExpImg from 'assets/images/exp.png';

const WorkExperience = () => {
  return (
    <div className="work-exp fit-height fit-width o-hidden">
      <div className="work-exp-container">
        <div className="work-exp-heading">
          <h1 className="text-head font-montserrat">Work Experience</h1>
        </div>
        <WorkExperienceContent />
        <div className="work-exp-img">
          <img
            src={ExpImg}
            alt="amey, amey khoje, Amey Khoje, ameykhoje, AmeyKhoje"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
