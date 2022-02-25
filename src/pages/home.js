import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import CountryCard from "../components/CountryCard";
import api from "../services/api";
import CharCustomizedBarChart from "../components/CustomizedBarChart";



export default function Home() {
  const [globalData, setGlobalData] = useState();
  const [countries, setCountries] = useState();
  const [barChatData, setBarChartData] = useState([]);
  const sectedCountries = [24, 185, 163, 36, 143, 85, 35, 52];

  useEffect(() => {
    async function executeRequest() {
      try {
        const response = await api.get("summary");
        const { Global, Countries } = response.data;

        const filteredCountries = sectedCountries.map(
          (option) => Countries[option]
        );

        const chartData = filteredCountries.map(
          ({ CountryCode, TotalDeaths }) => {
            return {
              country: CountryCode,
              deathNumbers: TotalDeaths,
            };
          }
        );

        setBarChartData(chartData)
        setGlobalData(Global);
        setCountries(filteredCountries);
      } catch (error) {
        console.error("ops! ocorreu um erro : " + error.message);
      }
    }

    executeRequest();
  }, [sectedCountries]);

  const barConfig = {
    bars: [{ key: "deathNumbers", color: "#003838" }],
    Xkey: "country",
  };



  return (
    <div id="home-page">
      <section>
        <div id="box-title">
          <p id="hashtags">#washyourhands</p>
          <h1 id="title-1">GLOBAL SITUATION</h1>
        </div>

        <div id="div-section">
          <div id="div-extern-global">
            <div id="div-intern-left">
              <div className="div-ajust">
                <h1 className="data-div-right">{globalData?.TotalConfirmed}</h1>
                <p className="p-div-right">Confirmed Cases</p>
              </div>

              <div className="div-ajust">
                <h1 className="data-div-right">{globalData?.TotalDeaths}</h1>
                <p className="p-div-right">Cases of Death</p>
              </div>
            </div>

            <div id="div-intern-right">
              <p className="data-div-left">{globalData?.NewDeaths}</p>
              <p className="p-div-left">New Deaths</p>

              <p className="data-div-left">{globalData?.NewConfirmed}</p>
              <p className="p-div-left">New Confirmeds</p>

              <p className="data-div-left">{globalData?.NewRecovered}</p>
              <p className="p-div-left">New Recovereds</p>

              <p className="data-div-left">{globalData?.TotalRecovered}</p>
              <p className="p-div-left">Total Recovereds</p>
            </div>
          </div>
          
            <CharCustomizedBarChart
                maxWidth={550}
                height={300}
                data={barChatData}
                config={barConfig}
              />

          <small id="small-date">
            UPDATED : <span id="span-date">{globalData?.Date}</span>{" "}
          </small>
          </div>
      </section>

      <section>
        <div id="box-title">
          <p id="hashtags">#washyourhands</p>
          <h1 id="title-1">SITUATION BY COUNTRY</h1>
        </div>

        <div id="div-content-cards">
          {countries?.map((country, index) => (
            <CountryCard key={index} region={country} />
          ))}
        </div>
      </section>
    </div>
  );
}
