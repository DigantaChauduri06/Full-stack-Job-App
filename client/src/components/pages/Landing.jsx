// Styles
import { Wrapper } from "../../assets/css/LandingPage";
import { motion, AnimatePresence } from "framer-motion";
// Logos
import main from "../../assets/images/main.svg";
import { Logo } from "../index";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      {/* Navbar */}
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>
          </h1>
          <p>
            I'm baby craft beer bushwick heirloom, brunch mixtape slow-carb
            meditation typewriter freegan +1 glossier. +1 church-key
            intelligentsia ennui hoodie, artisan paleo blue bottle messenger bag
            knausgaard copper mug. Intelligentsia shoreditch blog, vice tumeric
            photo booth jean shorts pabst enamel pin brunch air plant. Enamel
            pin hexagon raw denim migas dreamcatcher.
          </p>
          <Link className="btn btn-hero" to="/register">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
