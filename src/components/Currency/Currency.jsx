import React, { useState } from "react";
import "./Currency.css";
import { FaExchangeAlt } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_tFhMRG6sc37zaf8vxrGL7RnaK4MERwmDLFcFOJwj";

function Currency() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [resultAmount, setResultAmount] = useState("0");

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResultAmount(result);
  };

  return (
    <div className="currency-container">
      <div className="title">
        <h2>Döviz Kuru Hesaplama</h2>
      </div>
      <div className="currency-body">
        <input
          type="number"
          className="currency"
          min={"0"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="to"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaExchangeAlt style={{ fontSize: "24px", color: "#fff" }} />
        <select className="to" onChange={(e) => setToCurrency(e.target.value)}>
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          className="currency"
          value={resultAmount}
          onChange={(e) => setResultAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={exchange} className="currency-btn">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
