// App.jsx
import "./App.css";
import Content from "./pages/Content";
import Footer from "./component/parts/Footer";
import Header from "./component/parts/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    Aos.init(
      {duration: 2000}
    );
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 ">
        <Header handleScrollTo={handleScrollTo} />
      </header>
      <main className="w-full bg-green-500 z-40">
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
