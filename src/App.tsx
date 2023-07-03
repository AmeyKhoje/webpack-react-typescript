import 'assets/styles/style.scss';
import Banner from './components/sections/banner/Banner';
import About from './components/sections/about/About';
import WorkExperience from './components/sections/work-experience/WorkExperience';
import Skills from './components/sections/skills/Skills';
import { SKILLS } from './utils/constants';

const App = () => {
  return (
    <div>
      <Banner />
      <About />
      <WorkExperience />
      <Skills set={SKILLS} />
    </div>
  );
};

export default App;
