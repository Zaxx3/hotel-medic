import { useNavigate } from "react-router-dom";
import occupancyIcon from "../assets/occupancy.svg";

function roomBubble(props) {
  const navigate = useNavigate();

  const handleBubbleClick = (room) => {
    navigate(`/room/${room.id}`, { state: { room } });
  };

  return (
    <>
      {props.map((item) => (
        <div
          className="room-bubble"
          key={item.id}
          id={item.id}
          onClick={() => handleBubbleClick(item)}
          style={{ cursor: "pointer" }}
        >
          <img src={item.image[0]} alt="room" />
          <div className="short-desc">
            <p className="name">{item.name}</p>
            <p className="occupancy">
              <img src={occupancyIcon} alt="" />
              {item.occupancy}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default roomBubble;
