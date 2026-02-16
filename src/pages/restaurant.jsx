import Footer from "../components/footer";
import Header from "../components/header";

const images = Object.values(
  import.meta.glob("../assets/res/*.jpg", {
    eager: true,
    import: "default",
  }),
);

const foodImages = Object.values(
  import.meta.glob("../assets/food/*.webp", {
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
            {foodImages.map((image, index) => (
              <img key={index} src={image} alt={`Food ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Restaurant;
