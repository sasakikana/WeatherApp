import { useEffect, useState } from "react";
import "./Style.css";

const Weather = ({ city, bgColor }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  const style = {
    backgroundColor: `${bgColor}`,
    padding: "2rem",
    width: "24rem",
    height: "16rem",
    margin: "0 auto 5rem",
    borderRadius: "0.75rem",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    position: "relative",
    color: "white",
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efa43bf6c58851a8866774ec9dcf56de&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [city]);
  if (loading) {
    return <></>;
  }
  return (
    <div className="card" style={style}>
      <div className="flex">
        <dl>
          <dt>City Name</dt>
          <dd>{data.name}</dd>
        </dl>
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="image"
        />
      </div>

      <dl>
        <dt>Weather Condition</dt>
        <dd>{data.weather[0].main}</dd>
      </dl>

      <div className="flex">
        <dl>
          <dt>Date</dt>
          <dd>{`${year}/${month}/${day}`}</dd>
        </dl>
        <dl>
          <dt>Temperature</dt>
          <dd>{data.main.temp}°C</dd>
        </dl>
        <dl>
          <dt>Humidity</dt>
          <dd>{data.main.humidity}%</dd>
        </dl>
      </div>
    </div>
  );
};

export default Weather;
