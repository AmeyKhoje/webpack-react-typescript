import { EXPERIENCE_LIST } from 'src/utils/constants';
import WorkExperienceContentCard from './WorkExperienceContentCard';

const WorkExperienceContent = () => {
  return (
    <div className="work-exp-content">
      {EXPERIENCE_LIST.map((exp) => (
        <WorkExperienceContentCard
          company={exp.company}
          designation={exp.designation}
          period={exp.period}
        />
      ))}
    </div>
  );
};

export default WorkExperienceContent;
