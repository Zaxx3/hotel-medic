import apartmentImg from "../assets/rooms/apartment.jpg";

import deluxeImg from "../assets/rooms/deluxe.jpg";
import deluxeImg2 from "../assets/rooms/deluxe2.jpg";
import deluxeImg3 from "../assets/rooms/deluxe3.jpg";

import quadrupleImg from "../assets/rooms/quadruple.jpg";
import quadrupleImg2 from "../assets/rooms/quadruple2.jpg";

import tripleImg from "../assets/rooms/triple.jpg";
import tripleImg2 from "../assets/rooms/triple2.jpg";

import doubleImg from "../assets/rooms/double.jpg";
import doubleImg2 from "../assets/rooms/double2.jpg";

import maisonetteImg from "../assets/rooms/maisonette.jpg";

const rooms = [
  {
    id: 1,
    name: "Апартамент",
    occupancy: "4",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: [apartmentImg],
  },
  {
    id: 2,
    name: "Двойна стая 'Делукс'",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло"],
    image: [deluxeImg, deluxeImg2, deluxeImg3],
  },
  {
    id: 3,
    name: "Четворна стая",
    occupancy: "4",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Четири единични легла"],
    image: [quadrupleImg, quadrupleImg2],
  },
  {
    id: 4,
    name: "Тройна стая",
    occupancy: "3",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Три единични легла"],
    image: [tripleImg, tripleImg2],
  },
  {
    id: 5,
    name: "Двойна стая",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Две единични легла или двойно легло"],
    image: [doubleImg, doubleImg2],
  },
  {
    id: 6,
    name: "Мезонет",
    occupancy: "4",
    commodity: ["wi-fi", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: [maisonetteImg],
  },
];

export default rooms;
