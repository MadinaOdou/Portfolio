import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
