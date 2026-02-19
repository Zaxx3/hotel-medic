import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import roomBubble from "../components/room_bubble.jsx";
import rooms from "../data/rooms.js";
import PriceTable from "../components/priceTable.jsx";
import { Link } from "react-router-dom";
function Rooms() {
  return (
    <>
      <Header />
      <div className="rooms-page-content">
        <div className="rooms-page-top-banner">
          <h1>Хотелска част</h1>
          <p>
            Нашите стаи съчетават комфорт, стил и спокойствие, за да ви осигурят
            пълноценна почивка. Насладете се на уютна атмосфера и всички
            необходими удобства за един приятен престой.
            <br />
            <span>
              Нашите цени може да видите <Link to="/prices">тук</Link>
            </span>
          </p>
        </div>
        <div className="rooms-grid">{roomBubble(rooms)}</div>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
