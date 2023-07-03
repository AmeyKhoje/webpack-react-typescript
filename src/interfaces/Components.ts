export interface TypographyInterface {
  type: String;
  fontLevel: Number;
  fontFamilyCategory: Number;
}

export interface WorkExperienceContentCardInterface {
  designation: String;
  company: String;
  period: String;
}

export interface SkillSetInterface {
  set: { title: string; underSkills: { name: String }[] };
}

export interface SkillsInterface {
  set: { title: string; underSkills: { name: String }[] }[];
}
