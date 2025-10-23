import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__image_container">
          <img src="assets/person-intro.webp" alt="Person image" />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__right-wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Zen Developer</h1>
          <h3>
            Freelance <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
