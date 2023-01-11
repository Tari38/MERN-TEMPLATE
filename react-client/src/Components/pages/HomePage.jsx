import { useEffect, useState } from "react";
import "./HomePage.css";

const API_URL = process.env.REACT_APP_API;

function HomePage() {
  const [data, setData] = useState("No data :(");

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

    return (
      <div id="home" className="home-section">
        <h1 className="home-title">MERN App!</h1>
        <p>Data from server: {data}</p>
      </div>
    )
  }

export default HomePage;
