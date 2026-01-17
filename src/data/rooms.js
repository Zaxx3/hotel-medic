import apartmentImg from "../assets/rooms/apartment.jpg";
import deluxeImg from "../assets/rooms/deluxe.jpg";
import quadrupleImg from "../assets/rooms/quadruple.jpg";
import tripleImg from "../assets/rooms/triple.jpg";
import doubleImg from "../assets/rooms/double.jpg";
import maisonetteImg from "../assets/rooms/maisonette.jpg";

const rooms = [
  {
    id: 1,
    name: "Апартамент",
    occupancy: "4",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: apartmentImg,
  },
  {
    id: 2,
    name: "Двойна стая 'Делукс'",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло"],
    image: deluxeImg,
  },
  {
    id: 3,
    name: "Четворна стая",
    occupancy: "4",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Четири единични легла"],
    image: quadrupleImg,
  },
  {
    id: 4,
    name: "Тройна стая",
    occupancy: "3",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Три единични легла"],
    image: tripleImg,
  },
  {
    id: 5,
    name: "Двойна стая",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Две единични легла или двойно легло"],
    image: doubleImg,
  },
  {
    id: 6,
    name: "Мезонет",
    occupancy: "4",
    commodity: ["wi-fi", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: maisonetteImg,
  },
];

export default rooms;
