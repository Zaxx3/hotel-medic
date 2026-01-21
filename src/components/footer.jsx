import { Link } from "react-router-dom";
import pin from "../assets/pin.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
function Footer() {
  return (
    <footer>
      <div className="nav">
        <h3>Навигация</h3>
        <div className="links">
          <Link to="/">Начало</Link>
          <Link to="/rooms">Стаи</Link>
          <Link to="/contacts">Контакти</Link>
        </div>
      </div>
      <div className="about-us">
        <h3>За нас</h3>
        <p>
          Разположен в комплекса на Медицинска академия и в непосредствена
          близост до ВМА, Майчин дом, Стадион “Раковски” и НДК, хотел Медик е
          достъпно и удобно решение за вашия престой в София.
        </p>
      </div>

      <div className="contacts">
        <h3>Контакти</h3>
        <div className="list">
          <div className="address">
            <img src={pin} alt="pin" />
            <p>ул. “Хан Пресиян” 2, 1431 София Център</p>
          </div>
          <div className="phone">
            <img src={phone} alt="phone" />
            <div className="numbers">
              +359(2) 9521122
              <br></br>
              +359(2) 9526890
            </div>
          </div>
          <div className="email">
            <img src={email} alt="email" />

            <p>info@hotel-medic.com</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        Made by{" "}
        <a href="https://www.linkedin.com/in/maxim-aliev-18436a1a9/">
          @MaximAliev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
