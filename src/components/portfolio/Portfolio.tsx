import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  type PortfolioData,
} from "../../data";

interface List {
  id: string;
  title: string;
}

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState<PortfolioData[]>([]);

  const list: List[] = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "branding", title: "Branding" },
  ];

  useEffect(() => {
    if (selected === "featured") setData(featuredPortfolio);
    if (selected === "web") setData(webPortfolio);
    if (selected === "mobile") setData(mobilePortfolio);
    if (selected === "design") setData(designPortfolio);
    if (selected === "branding") setData(contentPortfolio);
  }, [selected]);

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <nav>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            isActive={selected === item.id}
            handleClick={() => setSelected(item.id)}
          />
        ))}
      </nav>
      <div className="portfolio__container">
        {data.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
