import React, {useState} from 'react';
import Context from './context';

function Provider({children}) {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState(false);

  const obj = {
    hour, setHour,
    min, setMin,
    sec, setSec,
    total, setTotal,
    start, setStart
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default Provider;
