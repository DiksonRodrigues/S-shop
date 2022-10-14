import { useState, createContext } from 'react';

export const UserContext = createContext({});

function ListProvider({children}){
  const [ItemArray, setItemArray] = useState([]);
  const [cesta, setCesta] = useState([]);
  const [compras, setCompras] = useState([]);
  
  return (
    <UserContext.Provider value={{ItemArray,setItemArray, cesta, setCesta,compras,setCompras}}>
      {children}
    </UserContext.Provider>
  )
}

export default ListProvider;  