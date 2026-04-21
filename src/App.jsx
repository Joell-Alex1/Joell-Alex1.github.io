import Navbar from "./components/Navbar.jsx";
import Experience from "./components/experience.jsx";
import Projects from "./components/projects.jsx";
import Contacts from "./components/contacts.jsx";
import { DottedSurface } from "./components/DottedSurface.jsx";

function App() {
  return (
    <div className="bg-transparent min-h-screen text-white px-10 py-6 pt-16">
      <DottedSurface />
      <Navbar />

      <section id="experience" className="mt-10">
        <Experience />
      </section>

      <section id="projects" className="mt-10">
        <Projects />
      </section>

      <section id="contact" className="mt-10">
        <Contacts />
      </section>
    </div>
  );
}

export default App;