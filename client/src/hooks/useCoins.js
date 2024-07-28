import { useState, useEffect } from "react";
import * as serverDataAPI from "../API/serverDataAPI.js";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const result = await serverDataAPI.getAll();
        setCoins(result);
      } catch (err) {
        setError(err.message);
        setCoins([]);
      }
    };

    fetchCoins();
  }, []);

  return { coins, error };
};

export default useCoins;