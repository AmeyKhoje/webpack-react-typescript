import 'assets/styles/style.scss';
import Banner from './components/sections/banner/Banner';
import About from './components/sections/about/About';
import WorkExperience from './components/sections/work-experience/WorkExperience';

const App = () => {
  return (
    <div>
      <Banner />
      <About />
      <WorkExperience />
    </div>
  );
};

export default App;
