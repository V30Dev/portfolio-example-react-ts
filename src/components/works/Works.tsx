import { useState } from "react";
import "./works.scss";

interface Slide {
  id: string;
  icon: string;
  title: string;
  desc: string;
  img: string;
}

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data: Slide[] = [
    {
      id: "1",
      icon: "./assets/world.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/device-mobile.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleSlide = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : data.length - 1);
    } else {
      setCurrentSlide(currentSlide !== data.length - 1 ? currentSlide + 1 : 0);
    }
  };

  return (
    <section className="works" id="works">
      <div
        className="works__slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((slide) => (
          <div className="works__container" key={slide.id}>
            <article className="works__item">
              <div className="works__left">
                <div className="works__image-container">
                  <img src={slide.icon} alt="Icon" />
                </div>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <span>Projects</span>
              </div>
              <div className="works__right">
                <img src={slide.img} alt={`App - ${slide.title}`} />
              </div>
            </article>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src="/assets/arrow-left.png"
        alt="Left arrow icon"
        onClick={() => handleSlide("left")}
      />
      <img
        className="arrow right"
        src="/assets/arrow-left.png"
        alt="Right arrow icon"
        onClick={() => handleSlide("right")}
      />
    </section>
  );
};

export default Works;
