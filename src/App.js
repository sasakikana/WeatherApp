import "./Style.css";
import Weather from "./Weather.js";

export default function App() {
  const cities = [
    {
      city: "Tokyo",
      bgColor: "red",
    },
    {
      city: "London",
      bgColor: "limegreen",
    },
    {
      city: "Paris",
      bgColor: "orange",
    },
    {
      city: "Los Angeles",
      bgColor: "deepskyblue",
    },
  ];
  return (
    <div className="outline">
      {cities.map((city, index) => (
        <Weather key={index} city={city.city} bgColor={city.bgColor} />
      ))}
    </div>
  );
}
