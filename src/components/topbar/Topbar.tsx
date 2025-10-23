import "./topbar.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface Props {
  isMenuOpen: boolean;
  updateMenuState: () => void;
}

const Topbar = ({ isMenuOpen, updateMenuState }: Props) => {
  return (
    <header className={`topbar ${isMenuOpen && "active"}`}>
      <div className="topbar__wrapper">
        <div className="topbar__info">
          <a href="#intro" className="topbar__logo">
            Zen.
          </a>
          <div className="topbar__item_container">
            <PersonOutlineIcon className="icon" />
            <span>+57 300 616 1312</span>
          </div>
          <div className="topbar__item_container">
            <MailOutlineIcon className="icon" />
            <span>developer@email.com</span>
          </div>
        </div>

        <div className="topbar__hamburguer_container">
          <div className="hamburguer" onClick={updateMenuState}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
