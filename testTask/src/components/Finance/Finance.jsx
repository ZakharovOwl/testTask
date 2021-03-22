import React, { useEffect } from "react";
import { СurrencyArr } from "./../../api";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadCurrency } from "../../actions/currencyAction";
import CurrencyCard from "./CurrencyCard";

const Finance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCurrency());
  }, [dispatch]);
  const currency = useSelector((state) => state.currency.currencyAll.data);
  
  let trueCurrency;
  console.log(currency);

  const checkCurrency = () => {
    if (currency === undefined) {
      trueCurrency = СurrencyArr();
      console.log("hi");
    } else {
      trueCurrency = currency;
    }
  };
  checkCurrency();

  //console.log(currency);

  let date = new Date().toLocaleString();

  return (
    <div className="currency-wrapper">
      <h1>{`Finance ${date}`}</h1>
      <div className="currencyList">
        {trueCurrency.map((card) => (
          <CurrencyCard
            name={card.Cur_Name}
            abbreviation={card.Cur_Abbreviation}
            rate={card.Cur_OfficialRate}
            key={card.Cur_Name}
          />
        ))}
      </div>
    </div>
  );
};

export default Finance;
