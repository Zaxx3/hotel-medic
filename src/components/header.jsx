import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="name">Хотел Медик</div>
      <div className="navigation">
        <Link to="/">Начало</Link>
        <Link to="/rooms">Стаи</Link>
        <Link to="/restaurant">Ресторант</Link>
        <Link to="/contacts">Контакти</Link>
      </div>
    </header>
  );
}

export default Header;
