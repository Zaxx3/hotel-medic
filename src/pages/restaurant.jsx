import Footer from "../components/footer";
import Header from "../components/header";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import restaurant1 from "../assets/res1.jpg";
import restaurant2 from "../assets/res2.jpg";
function Restaurant() {
  return (
    <>
      <Header />
      <div className="restaurant">
        <div className="restaurant-container">
          <h1>Ресторант</h1>
          <p>
            Ресторантът на хотел „Медик“ предлага приятна и спокойна обстановка,
            подходяща за пълноценна закуска, обяд или вечеря. Това е място за
            отдих и неангажиращо хранене в уютна атмосфера Менюто включва
            разнообразни ястия, приготвени с внимание към вкуса и комфорта на
            гостите. Предлагаме обедно меню от понеделник до петък.
          </p>
        </div>
        <div className="restaurant-info">
          <div className="restaurant-interior">
            <img src={restaurant1} alt="" />
            <img src={restaurant2} alt="" />
          </div>
          <div className="menu">
            <h2>Меню</h2>
          </div>
          <div className="restaurant-images">
            <img src={food1} alt="" />
            <img src={food2} alt="" />
            <img src={food3} alt="" />
            <img src={food4} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Restaurant;
