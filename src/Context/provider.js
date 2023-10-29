import React, {useState} from 'react';
import Context from './context';

function Provider({children}) {
  const [timer, setTimer] = useState({hour: 0, minute: 0, second: 0})
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState(false);

  const obj = {
    timer, setTimer,
    total, setTotal,
    start, setStart
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default Provider;
