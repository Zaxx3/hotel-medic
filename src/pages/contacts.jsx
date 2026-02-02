import Footer from "../components/footer";
import Header from "../components/header";
import mapImage from "../assets/bubble3.jpg";
import pin from "../assets/pin.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import ContactForm from "../components/contacts_form.jsx";

function Contacts() {
  return (
    <>
      <Header />

      <div className="contacts-container">
        <div className="information">
          <h2>Къде да ни намерите</h2>
          <img src={mapImage} alt="Map" />
          <p className="about-us">
            Разположен в комплекса на Медицинска академия и в непосредствена
            близост до ВМА, Майчин дом, Стадион “Раковски” и НДК, хотел Медик е
            достъпно и удобно решение за вашия престой в София.
          </p>
          <ul>
            <li className="address">
              <div className="address-wrapper">
                <img src={pin} alt="Pin" />
                <p>ул. “Хан Пресиян” 2, 1431 София Център</p>
              </div>
            </li>
            <li className="phone">
              <div className="phone-wrapper">
                <img src={phone} alt="Phone" />
                <div className="numbers">
                  +359 2 952 11 22
                  <br></br>
                  +359 2 952 68 90
                  <br></br>
                  +359 8 843 34 593
                </div>
              </div>
            </li>
            <li className="email">
              <div className="email-wrapper">
                <img src={email} alt="Email" />
                <p>info@hotelmedic.bg</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="form">
          <h2>Свържете се с нас!</h2>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contacts;
