import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import ImageCarousel from "../components/carousel.jsx";

import occupancyIcon from "../assets/occupancy.svg";
import coffeeIcon from "../assets/coffee.svg";
import bedIcon from "../assets/bed.svg";

import rooms from "../data/rooms";

function RoomDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const room = location.state?.room || rooms.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Room not found</h2>
        <button onClick={() => navigate("/rooms")}>Back to Rooms</button>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="room-detail-content">
        <div className="room-info">
          <h1>{room.name}</h1>
          <div className="room-image">
            <ImageCarousel images={room.image} />
          </div>
          <div className="holder">
            <div className="room-details">
              <p>Детайли</p>
              <div className="ocupancy">
                <img src={occupancyIcon} alt="" />
                <p>Гости: </p>
                <p> {room.occupancy}</p>
              </div>
              <div className="commodities">
                <img src={coffeeIcon} alt="" />
                <p>Удобства: </p>
                <p>{room.commodity.join(", ")}</p>
              </div>
              <div className="beds">
                <img src={bedIcon} alt="" />
                <p>Легла: </p>
                <p>{room.beds.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="booking">
            <p>Резервирайте своят престой</p>
            <Link to="/contacts">Тук</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RoomDetail;
