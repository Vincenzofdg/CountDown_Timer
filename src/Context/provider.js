import React, {useState} from 'react';
import Context from './context';

function Provider({children}) {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const obj = {hour, setHour, min, setMin, sec, setSec};

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default Provider;
