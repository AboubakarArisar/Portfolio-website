import "./App.css";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Aboubakar Arisar | MERN Stack Developer</title>
        <meta name="description" content="Portfolio of Aboubakar Arisar, a passionate MERN Stack Developer focused on creating full stack web applications." />
        <meta name="keywords" content="MERN, React, Node.js, Portfolio, Aboubakar Arisar, Web Developer, pindari, pindaricoders, arisarsahab" />
        <meta property="og:title" content="Aboubakar Arisar | MERN Stack Developer" />
        <meta property="og:description" content="Portfolio of Aboubakar Arisar, MERN Stack Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-website-tau-rouge.vercel.app/" />
        <meta property="og:image" content="https://portfolio-website-tau-rouge.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aboubakar Arisar | MERN Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Aboubakar Arisar, a MERN Stack Developer from pakistan." />
        <meta name="twitter:image" content="https://aboubakararisar.vercel.app/preview.png" />
        <link rel="canonical" href="https://portfolio-website-tau-rouge.vercel.app/" />
      </Helmet>

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
