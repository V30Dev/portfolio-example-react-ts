import MenuItem, { type MenuItemInterface } from "../menuItem/MenuItem";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./menu.scss";

interface Props {
  isMenuOpen: boolean;
  onClick: () => void;
}

const menuLinks: MenuItemInterface[] = [
  { link: "#intro", text: "Intro" },
  { link: "#portfolio", text: "Portfolio" },
  { link: "#works", text: "Works" },
  { link: "#testimonials", text: "Testimonials" },
  { link: "#contact", text: "Contact" },
];

const Menu = ({ isMenuOpen, onClick }: Props) => {
  return (
    <nav className={`menu ${isMenuOpen && "active"}`}>
      <div className="menu__links">
        {menuLinks.map((item) => (
          <MenuItem
            key={item.link}
            link={item.link}
            text={item.text}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="menu__info">
        <div className="menu__item_container">
          <PersonOutlineIcon className="icon" />
          <span>+57 300 616 1312</span>
        </div>
        <div className="menu__item_container">
          <MailOutlineIcon className="icon" />
          <span>developer@email.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
