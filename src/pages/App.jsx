import Header from "../components/Header";
import Banner from "../components/Banner";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* Projects */}
      <section className="max-w-7xl mx-auto">
        <h1 className="text-6xl">PROJECTS</h1>
        <Projects />
      </section>
      <Footer />
    </div>
  );
};

export default App;
