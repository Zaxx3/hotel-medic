import Header from "../components/header.jsx";
import bubble1 from "../assets/bubble1.jpg";
import bubble2 from "../assets/bubble2.jpg";
import bubble3 from "../assets/bubble3.jpg";
import Footer from "../components/footer.jsx";
function MainPage() {
  return (
    <>
      <Header />
      <div className="main-page-content">
        <div className="main-banner">
          <h1>Добре дошли при нас</h1>
          <p>
            Хотел „Медик“ се намира в паркова зона, част от Медицинска академия
            и е в близост до всички останали болници в центъра на София –
            Медицинска академия, Пирогов, Военна болница и др. Само на 10 минути
            пеш от хотела се намира Националния дворец на културата, зала
            „Триадица“ и стадион „Раковски“.
          </p>
        </div>
      </div>
      <div className="short-desc-content">
        <div className="bubble one">
          <div className="image">
            <img src={bubble1} alt="Визия" />
          </div>
          <div className="text">
            <p>
              Подчертано деловият стил на хотела е умело съчетан с уюта и
              спокойствието, излъчвани от всичките 24 стаи, с които разполага
              комплексът, както и от 13 новооткрити луксозни стаи с интернет
              връзка във всяка от тях.
            </p>
          </div>
        </div>
        <div className="bubble two">
          <div className="image">
            <img src={bubble2} alt="стая" />
          </div>
          <div className="text">
            <p>
              Предлага всички необходими условия, както за активна почивка, така
              и за провеждане на бизнес – мероприятия.
            </p>
          </div>
        </div>
        <div className="bubble three">
          <div className="image">
            <img src={bubble3} alt="карта" />
          </div>
          <div className="text">
            <p>
              Разположен в комплекса на Медицинска академия и в непосредствена
              близост до ВМА, Майчин дом, Стадион “Раковски” и НДК, хотел Медик
              е достъпно и удобно решение за вашия престой в София.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
