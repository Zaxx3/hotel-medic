import apartmentImg from "../assets/rooms/apartment.jpg";
import apartmentImg2 from "../assets/rooms/apartment2.jpg";
import apartmentImg3 from "../assets/rooms/apartment3.jpg";
import apartmentImg4 from "../assets/rooms/apartment4.jpg";
import apartmentImg5 from "../assets/rooms/apartment5.jpg";

import deluxeImg from "../assets/rooms/deluxe.jpg";
import deluxeImg2 from "../assets/rooms/deluxe2.jpg";
import deluxeImg3 from "../assets/rooms/deluxe3.jpg";

import quadrupleImg from "../assets/rooms/quadruple.jpg";
import quadrupleImg2 from "../assets/rooms/quadruple2.jpg";

import tripleImg from "../assets/rooms/triple.jpg";
import tripleImg2 from "../assets/rooms/triple2.jpg";

import doubleImg from "../assets/rooms/double.jpg";
import doubleImg2 from "../assets/rooms/double2.jpg";
import doubleImg3 from "../assets/rooms/double3.jpg";

import maisonetteImg from "../assets/rooms/maisonette.jpg";
import maisonetteImg2 from "../assets/rooms/maisonette2.jpg";
import maisonetteImg3 from "../assets/rooms/maisonette3.jpg";

const rooms = [
  {
    id: 1,
    name: "Апартамент",
    occupancy: "4",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: [
      apartmentImg,
      apartmentImg2,
      apartmentImg3,
      apartmentImg4,
      apartmentImg5,
    ],
    priceSunToThu: 61,
    priceFriAndSat: 57,
  },
  {
    id: 2,
    name: "Двойна стая 'Делукс'",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Двойно легло"],
    image: [deluxeImg, deluxeImg2, deluxeImg3],
    priceSunToThu: 51,
    priceFriAndSat: 47,
  },
  {
    id: 3,
    name: "Тройна стая",
    occupancy: "3",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Три единични легла"],
    image: [tripleImg, tripleImg2],
    priceSunToThu: 50,
    priceFriAndSat: 45,
  },
  {
    id: 4,
    name: "Двойна стая",
    occupancy: "2",
    commodity: ["wi-fi", "Климатик (опционално)", "Телевизор"],
    beds: ["Две единични легла или двойно легло"],
    image: [doubleImg, doubleImg2, doubleImg3],
    priceSunToThu: 44,
    priceFriAndSat: 40,
  },
  {
    id: 5,
    name: "Мезонет",
    occupancy: "4",
    commodity: ["wi-fi", "Телевизор"],
    beds: ["Двойно легло", "Разтегателен диван"],
    image: [maisonetteImg, maisonetteImg2, maisonetteImg3],
    priceSunToThu: 59,
    priceFriAndSat: 53,
  },
];

export default rooms;
