import { useState } from "react";

export default function usePersistedState(key, initialState){
  const [state, setState] = useState(() => {
    const keyPersisted = localStorage.getItem(key);

    if(!keyPersisted) {
      return initialState;
    }

    const authData = JSON.parse(keyPersisted);
    return authData
  })

  const updateState = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setState(value)
  }

  return [state, updateState]
}