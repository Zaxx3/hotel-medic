import Header from "../components/header.jsx";
import bubble1 from "../assets/bubble1.jpg";
import bubble2 from "../assets/bubble2.jpg";
import bubble3 from "../assets/bubble3.jpg";
import newPart from "../assets/new_part.jpg";
import newPart2 from "../assets/new-part2.jpg";
import entrance from "../assets/entrance.jpg";
import Footer from "../components/footer.jsx";
function MainPage() {
  return (
    <>
      <Header />
      <div className="main-page-content">
        <div className="main-banner">
          <h1>Добре дошли при нас</h1>
        </div>
      </div>
      <div className="promotions hidden">
        <p>Промоция:</p>
        <p>До края на февруари, всички стаи са безплатни!!!</p>
      </div>
      <div className="short-desc-content">
        <div className="bubble one">
          <div className="image">
            <img src={bubble1} alt="Визия" />
          </div>
          <div className="text">
            <p>
              Хотел „Медик“ се намира в паркова зона, част от Александровска
              болница.В близост са болниците Майчин дом,ВМА,Белодробна
              болница,Св.Иван Рилски,Пирогов. Само на 10 минути пеша от хотела
              се намират Националния дворец на културата,зала „Триадица“,стадион
              „Раковски“. Хотелът разполага с 35 уютни стаи с възможност за
              настаняване на 70 човека в единични,двойни и тройни стаи,както и
              ресторант към него. При дългосрочно настаняване се прелагат
              индивидуални ценови отстъпки. За удобство на своите гости има
              паркинг за вашия автомобил.
            </p>
          </div>
        </div>
        <div className="bubble two">
          <div className="image">
            <img src={bubble2} alt="стая" />
          </div>
          <div className="image">
            <img src={newPart} alt="стая" />
          </div>
        </div>
        <div className="bubble three">
          <div className="image">
            <img src={entrance} alt="стая" />
          </div>
          <div className="image">
            <img src={newPart2} alt="стая" />
          </div>
        </div>
        <div className="bubble four">
          <div className="image">
            <img src={bubble3} alt="карта" />
          </div>
          <div className="text">
            <h2>Локация</h2>
            <p>
              Разположен в комплекса на УМБАЛ „Александровска“ и в
              непосредствена близост до ВМА, Майчин дом, Стадион “Раковски” и
              НДК, хотел Медик е достъпно и удобно решение за вашия престой в
              София.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
