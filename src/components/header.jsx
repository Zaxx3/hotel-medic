import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link className="name" to="/">
        Хотел Медик
      </Link>
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
