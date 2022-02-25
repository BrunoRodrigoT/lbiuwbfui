import React from "react";

const CountryCard = ({ region }) => {
  const {
    Country,
    TotalConfirmed,
    TotalDeaths,
    NewDeaths,
    NewConfirmed,
    NewRecovered,
    TotalRecovered,
  } = region;

  return (
    <div id="box-card">
      <div id="div-above">
        <p id="country">{Country}</p>

        <p className="data-box-above">{TotalConfirmed}</p>
        <p className="p-box-above">Confirmed Cases</p>

        <p className="data-box-above">{TotalDeaths}</p>
        <p className="p-box-above">Cases of Death</p>
      </div>
      <div id="div-below">
        <div className="div-card-ajust">
          <p className="data-box-below">{NewDeaths}</p>
          <p className="p-box-below">New Deaths</p>

          <p className="data-box-below">{NewConfirmed}</p>
          <p className="p-box-below">New Confirmeds</p>
        </div>

        <div className="div-card-ajust">
          <p className="data-box-below">{NewRecovered}</p>
          <p className="p-box-below">New Recovereds</p>

          <p className="data-box-below">{TotalRecovered}</p>
          <p className="p-box-below">Total Recovereds</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
