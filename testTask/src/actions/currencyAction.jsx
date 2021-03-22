import axios from "axios";
import { apiСurrencyURL } from "../api";

//Action creator

export const loadCurrency = () => async (dispatch) => {
  //fetch axios

  const currencyData = await axios.get(apiСurrencyURL());
  dispatch({
    type: "currency_value",
    payload: {
      currency: currencyData,
    },
  });
};
