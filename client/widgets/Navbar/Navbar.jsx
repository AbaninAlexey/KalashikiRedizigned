import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/gallery">Галлерея</Link>
      <Link to="/contacts">Контакты</Link>
    </nav>
  );
};

export default Navbar