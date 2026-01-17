import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

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
    <div className="room-detail">
      <Header />
      <div className="room-detail-content">
        <div className="room-image">
          <img src={room.image} alt={room.name} />
        </div>
        <div className="room-info">
          <h1>{room.name}</h1>
          <p className="occupancy">
            <strong>Occupancy:</strong> {room.occupancy} people
          </p>
          <div className="beds">
            <h3>Beds:</h3>
            <ul>
              {room.beds.map((bed, index) => (
                <li key={index}>{bed}</li>
              ))}
            </ul>
          </div>
          <div className="commodities">
            <h3>Amenities:</h3>
            <ul>
              {room.commodity.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RoomDetail;
