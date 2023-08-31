import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import "./App.css";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Slogan from "./sections/Slogan/Slogan";
import Footer from "./sections/Footer/Footer";
import ContactBtn from "./components/ContactBtn";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
     
      <Modal />
      <Header />
      <Hero />
      <Banner />
      <About />
      <Services />
      <Slogan />
      <Footer />
      <ul className="social-button-div-global">
        <li>
          <a href="tel:02324417419" className="social-rounded-btn">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/9005548015822"
            target="blank"
            className="wp-button"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
