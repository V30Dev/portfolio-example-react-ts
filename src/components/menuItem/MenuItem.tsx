import "./menuItem.scss";

export interface MenuItemInterface {
  link: string;
  text: string;
  onClick?: () => void;
}

const MenuItem = ({ link, text, onClick }: MenuItemInterface) => {
  return (
    <a href={link} onClick={onClick}>
      {text}
    </a>
  );
};

export default MenuItem;
