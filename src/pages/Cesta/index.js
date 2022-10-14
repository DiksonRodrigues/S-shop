import React, { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/itemlist";

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
  RemoveButton,
  ProductCategoryText,
  PriceContent,
  TotalPrice,
  FinishButton,
  FinishButtonText,
  FinishContainer,
  UserInfoContent,
  Title,
  UserInput,
} from "./styles";

function Cesta() {
  const { cesta, setCesta, compras, setCompras } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (cesta.length > 0) {
      localStorage.setItem("ItemCesta", JSON.stringify(cesta));
    }
  }, [cesta]);

  useEffect(() => {
    let ArrayLocal = JSON.parse(localStorage.getItem("ItemCesta"));
    if (ArrayLocal) {
      setCesta(ArrayLocal);
    }

    function valorFinal() {
      const total = cesta.reduce((acc, currentValue) => {
        console.log(acc);
        return acc + currentValue.price * currentValue.quantity;
      }, 0);

      setTotalPrice(total);
    }

    valorFinal();
  }, []);

  function realizarCompra() {
    if (username === "" || null) {
      alert("coloque um usuario");
      return;
    }

    if (cesta.length <= 0) {
      alert("adicione um item");
      return;
    }

    setCompras([
      ...cesta,
      {
        name: cesta?.name,
        price: cesta?.price,
        quantity: cesta?.quantityNumber,
        username: username,
      },
    ]);

    alert("Compra realizada com sucesso :)");
    localStorage.setItem("ItemCesta", JSON.stringify([]));
    setUsername("");
    navigate("/");
  }

  function RemoveItem(data, index) {
    let ArrayBase = [...cesta];

    ArrayBase.splice(index, 1);

    setCesta(ArrayBase);
    setTotalPrice(0);

    console.log(cesta);

    if (cesta.length === 0) {
      setCesta([]);
    }
  }

  return (
    <Container>
      <Header />

      <UserInfoContent>
        <Title>Username:</Title>
        <UserInput
          value={username}
          placeholder="joao"
          onChange={(e) => setUsername(e.target.value)}
        />
      </UserInfoContent>
      <Content>
        <ListContainer>
          <CategoryContainer>
            <CategoryBox>
              <CategoryTitle>Quantidade</CategoryTitle>
            </CategoryBox>
            <CategoryBox>
              <CategoryTitle>Produto</CategoryTitle>
            </CategoryBox>
            <CategoryBox>
              <CategoryTitle>Descrição</CategoryTitle>
            </CategoryBox>
            <CategoryBox>
              <CategoryTitle>Valor</CategoryTitle>
            </CategoryBox>
            <CategoryBox>
              <CategoryTitle>Remover</CategoryTitle>
            </CategoryBox>
          </CategoryContainer>

          {cesta ? (
            <>
              {cesta.map((data, index) => {
                return (
                  <ItemContainer>
                    <ItemBox>
                      <ItemName>{data?.quantity}</ItemName>
                    </ItemBox>
                    <ItemBox>
                      <ItemName>{data?.name}</ItemName>
                    </ItemBox>

                    <ItemBox>
                      <ItemName>{data?.desc}</ItemName>
                    </ItemBox>

                    <ItemBox>
                      <ItemName>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(data?.price)}
                      </ItemName>
                    </ItemBox>

                    <RemoveButton onClick={() => RemoveItem(data, index)}>
                      <ProductCategoryText style={{ color: "#FFFFFF" }}>
                        X
                      </ProductCategoryText>
                    </RemoveButton>
                  </ItemContainer>
                );
              })}
            </>
          ) : (
            <>
              <Header />
              <p>esperando os itens serem adicionados...</p>
            </>
          )}

          <PriceContent>
            <FinishContainer>
              <TotalPrice>Total: R$ {totalPrice}</TotalPrice>
              <FinishButton onClick={realizarCompra}>
                <FinishButtonText>Finalizar compra</FinishButtonText>
              </FinishButton>
            </FinishContainer>
          </PriceContent>
        </ListContainer>
      </Content>
    </Container>
  );
}

export default Cesta;
