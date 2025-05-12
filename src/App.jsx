import "./App.css";
import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar";
import Cover from "./Components/Cover";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import GithubContributions from "./Components/GithubContributions";

function App() {
  return (
    <>
      <Navbar />

      <div className='flex bg-black pt-24'>
        <Aside />
        <div>
          <Cover />
          <Skills />
          <GithubContributions />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
