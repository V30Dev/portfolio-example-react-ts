import "./portfolioList.scss";

interface Props {
  title: string;
  isActive: boolean;
  handleClick: () => void;
}

const PortfolioList = ({ title, isActive, handleClick }: Props) => {
  return (
    <span
      className={`portfolio-list ${isActive && "active"}`}
      onClick={handleClick}
    >
      {title}
    </span>
  );
};

export default PortfolioList;
