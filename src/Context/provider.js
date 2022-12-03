import React, {useState} from 'react';
import Context from './context';

function Provider({children}) {
  const [hour, setHour] = useState('0');
  const [min, setMin] = useState('0');
  const [sec, setSec] = useState('0');
  const [total, setTotal] = useState({value: 0, display: false});

  const obj = {hour, setHour, min, setMin, sec, setSec, total, setTotal};

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default Provider;
