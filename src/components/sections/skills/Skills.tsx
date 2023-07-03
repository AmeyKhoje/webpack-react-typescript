import SkillsImage from 'assets/images/skills.jpg';
import SkillList from './SkillList';
import { SkillsInterface } from 'src/interfaces/Components';

const Skills = ({ set }: SkillsInterface) => {
  return (
    <div className="skills fit-height fit-width o-hidden">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-header-banner">
            <img src={SkillsImage} alt="" />
          </div>
          <div className="skills-header-text">
            <h1 className="text-head font-montserrat">Skills & Expertise</h1>
          </div>
        </div>
        <div className="skills-content">
          {set?.map((skill) => (
            <SkillList set={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
