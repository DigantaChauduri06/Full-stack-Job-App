import { Wrapper } from "../assets/css/Wrapper";
// Logos
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      {/* Navbar */}
      <nav>
        <img src={logo} alt="" />
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
          <button className="btn btn-hero">Login / Register</button>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
