import React, {useEffect, useState, useContext} from 'react';
import Header from '../../Components/Header';
import { UserContext } from '../../contexts/itemlist';

import { 
Container,
Content,
ListContainer,
CategoryContainer,
CategoryTitle,
CategoryBox,
ItemContainer,
ItemBox,
ItemName,
ItemButton,
ItemValueBox,
QuantityItem,
AddItemBox,
AddItemTile,
} from './styles';


function Home() {
  const [itemArray, setItemArray] = useState([]);
  const [quantityNumber, setQuantityNumber] = useState(0);
  const { cesta, setCesta } = useContext(UserContext);

  useEffect( () => {
    if (cesta.length > 0) {
      localStorage.setItem("ItemCesta", JSON.stringify(cesta))
    }

  }, [cesta])

  useEffect( () => {
    let ArrayLocal = localStorage.getItem("ItemAdminArray");
    setItemArray(JSON.parse(ArrayLocal))
  },[])

  function AddtoCart(data){
    setCesta([...cesta, {
      name: data.name,
      desc: data.desc,
      price: data.price,
      quantity: quantityNumber,
    }])

    alert("Adicionado a cesta de compras!")
    setQuantityNumber(0)
  }

  return (
    <Container>
      <Header/>

    <Content>
      <ListContainer>
        <CategoryContainer>
         <CategoryBox>
          <CategoryTitle>Produtos</CategoryTitle>
         </CategoryBox>
         <CategoryBox>
          <CategoryTitle>Descrição</CategoryTitle>
         </CategoryBox>
         <CategoryBox>
          <CategoryTitle>Administrar</CategoryTitle>
         </CategoryBox>
        </CategoryContainer>

        {
          itemArray ? 
          (
            <>
                    {
          itemArray.map( (data, index) => {
            return (
              <ItemContainer>
              <ItemBox>
                <ItemName>{data?.name}</ItemName>
              </ItemBox>
              
              <ItemBox>
                <ItemName>{data?.desc}</ItemName>
              </ItemBox>
    
              <ItemButton>
                  <QuantityItem 
                  placeholder="Quantidade"
                  place
                  type="number"
                  onChange={ (e) => setQuantityNumber(e.target.value) }
                  />
    
                <AddItemBox onClick={ () => AddtoCart(data,index) }>
                  <AddItemTile>Adicionar</AddItemTile>
                </AddItemBox>
              </ItemButton>
            </ItemContainer>
            )
          } )
        }
            </>
          ) :
          (
            <></>
          )
        }

      </ListContainer>

      

    </Content>
    </Container>
  )
}

export default Home;