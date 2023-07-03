import WorkExperienceContent from 'src/components/work-experience-content/WorkExperienceContent';

const WorkExperience = () => {
  return (
    <div className="work-exp fit-height fit-width o-hidden">
      <div className="work-exp-container">
        <div className="work-exp-heading">
          <h1 className="text-head font-montserrat">Work Experience</h1>
        </div>
        <WorkExperienceContent />
      </div>
    </div>
  );
};

export default WorkExperience;
