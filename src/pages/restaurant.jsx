import Footer from "../components/footer";
import Header from "../components/header";
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
            подходяща за пълноценен обяд или вечеря. Менюто включва разнообразни
            ястия, приготвени с внимание към вкуса и комфорта на гостите. Място
            за отдих и неангажиращо хранене в уютна атмосфера.
          </p>
        </div>
        <div className="restaurant-info">
          <div className="restaurant-images">
            <img src={restaurant1} alt="" />
            <img src={restaurant2} alt="" />
          </div>
          <div className="menu">
            <h2>Меню</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Restaurant;
