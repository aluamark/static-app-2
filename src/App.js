import About from "./components/about/About";
import Categories from "./components/categories/Categories";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <>
      <AppNavbar />
      <div id="home" className="container">
        <Hero />
        <Featured />
        <Categories />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
