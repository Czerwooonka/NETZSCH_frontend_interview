import { useEffect, useState } from "react";
import factory from "../utils/wasm/converter";

export const useConverter = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        const instance = await factory();
        setState(instance);
      } catch (error) {
        console.error(error);
      }
    };

    loadWasm();
  }, []);

  return state;
};
