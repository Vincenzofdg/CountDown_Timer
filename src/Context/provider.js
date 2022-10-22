import React, {useState} from 'react';
import Context from './context';

function Provider({children}) {
  const [hour, setHour] = useState({value: 0, display: 'h'});
  const [min, setMin] = useState({value: 0, display: 'm'});
  const [sec, setSec] = useState({value: 0, display: 's'});

  const obj = {hour, setHour, min, setMin, sec, setSec};

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default Provider;
