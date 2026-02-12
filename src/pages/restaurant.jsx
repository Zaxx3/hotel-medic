import Footer from "../components/footer";
import Header from "../components/header";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
const images = Object.values(
  import.meta.glob("../assets/res/*.jpg", {
    eager: true,
    import: "default",
  }),
);

import RestaurantCarousel from "../components/resaturant_carousel";

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
            отдих и неангажиращо хранене в уютна атмосфера.Менюто включва
            разнообразни месни и безмесни ястия,салати,супи и десерти приготвени
            с внимание към вкуса и предпочитанията на своите клиенти.Предлагаме
            обедно меню от понеделник до петък.
          </p>
        </div>
        <div className="restaurant-info">
          <div className="restaurant-interior">
            <RestaurantCarousel images={images} />
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
