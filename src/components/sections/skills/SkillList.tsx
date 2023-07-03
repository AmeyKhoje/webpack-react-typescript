import { SkillSetInterface } from 'src/interfaces/Components';
import ArrowRight from 'assets/images/arrow-right.svg';

const SkillList = ({ set }: SkillSetInterface) => {
  return (
    <div className="skill-list-container">
      <div className="skill-list-head">
        <h3 className="font-noto">{set.title}</h3>
      </div>
      <ul className="skill-list font-noto">
        {set.underSkills.map((item) => (
          <li className="skill-list-item font-montserrat">
            <img src={ArrowRight} alt="" /> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
