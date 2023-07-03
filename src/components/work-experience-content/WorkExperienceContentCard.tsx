import { WorkExperienceContentCardInterface } from 'src/interfaces/Components';

const WorkExperienceContentCard = ({
  company,
  designation,
  period,
}: WorkExperienceContentCardInterface) => {
  return (
    <div className="work-exp-content-card">
      <div className="designation font-noto">{designation}</div>
      <div className="company font-montserrat">{company}</div>
      <div className="period font-montserrat">{period}</div>
    </div>
  );
};

export default WorkExperienceContentCard;
