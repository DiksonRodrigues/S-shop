import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Components/Header';
import Compras from '../Compras';
import { UserContext } from '../../contexts/itemlist';

import { 
Container,
Content,
Sidebar,
CategoryContent,
CategoryTitle,
AdminPage,
AdminHeader,
Title,
SubCategory,
ContentPage,
HeaderComponent,
ProductContainer,
ProductTile,
ProductInput,
DescriptionInput,
ButtonContainer,
ButtonText,
ListItens,
ProductCategory,
ProductCategoryText,
DescriptionCategory,
RemoveButton
} from './styles';

function Admin() {
    const [productName, setProductname] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [telaAtual, SetTelaAtual] = useState("Produtos");
    const {ItemArray,setItemArray} = useContext(UserContext);

    useEffect( () => {
      if (ItemArray.length > 0) {
        localStorage.setItem("ItemAdminArray", JSON.stringify(ItemArray))
      }

    }, [ItemArray])

    useEffect( () => {
      const item = JSON.parse(localStorage.getItem("ItemAdminArray"))
        if(item){
          setItemArray(item)
        }
    },[])

    function CreateItem(){
      if (productName === "" || productDesc ==="" || productPrice === 0){
        alert("preencha todos os campos!")
        return
      }

      setItemArray([...ItemArray, {
        name: productName,
        desc: productDesc,
        price: productPrice,
        quantity: 0,
      }]);

      alert(`O item ${productName} foi adicionado com sucesso!`)
      setProductname("")
      setProductDesc("")
      setProductPrice(0)
    }

    function RemoveItem(data,index){
        let ArrayBase = [...ItemArray]

        ArrayBase.splice(index,1)

        setItemArray(ArrayBase)

        console.log(ItemArray)

        if (ItemArray.length === 0){
          setItemArray([])
        }
    }

  return (
    <Container>
      <Header/>
      <Content>
        <Sidebar>
          <CategoryContent 
          onClick={ () =>  SetTelaAtual("Produtos")}
          style={{background: telaAtual === "Produtos" ? "#e9c46a" : "#6c584c"}}>
            <CategoryTitle>Produtos</CategoryTitle>
          </CategoryContent>
          <CategoryContent
          onClick={() =>  SetTelaAtual("Compras")}
          style={{background: telaAtual === "Compras" ? "#e9c46a" : "#6c584c"}}>
            <CategoryTitle>Compras</CategoryTitle>
          </CategoryContent>
        </Sidebar>

        {
          telaAtual === "Produtos" ?
          (
            <>
                    <AdminPage>
          <AdminHeader>
            <Title>Admin {">"} </Title>
            <SubCategory>Produto</SubCategory>
          </AdminHeader>

          <ContentPage>
            <HeaderComponent>
              <ProductContainer>
                <ProductTile>Produto</ProductTile>
                <ProductInput 
                placeholder='nome'
                type="text"
                value={productName}
                onChange={ (event) => setProductname(event.target.value) }
                />
              </ProductContainer>

              <ProductContainer>
                <ProductTile>Descrição</ProductTile>
                <DescriptionInput 
                placeholder='descrição'
                type="text"
                value={productDesc}
                onChange={ (event) => setProductDesc(event.target.value) }
                />
              </ProductContainer>

              <ProductContainer>
                <ProductTile>Preço</ProductTile>
                <ProductInput 
                placeholder='R$ 4,00'
                type="number"
                value={productPrice}
                onChange={ (event) => setProductPrice(event.target.value)}
                />
              </ProductContainer>

              <ButtonContainer onClick={CreateItem}>
                <ButtonText>+</ButtonText>
              </ButtonContainer>
            </HeaderComponent>
          </ContentPage>

          <ListItens>
            <ProductCategory>
              <ProductCategoryText>Produto</ProductCategoryText>
            </ProductCategory>

            <DescriptionCategory>
              <ProductCategoryText>Descrição</ProductCategoryText>
            </DescriptionCategory>

            <ProductCategory>
              <ProductCategoryText>Preço</ProductCategoryText>
            </ProductCategory>

            <ProductCategory>
              <ProductCategoryText>Remover</ProductCategoryText>
            </ProductCategory>
          </ListItens>

          <>
          {
            ItemArray.map( (data, i) => {
              return (
                <ListItens 
                style={{marginTop:10}}
                key={data.desc}
                >
                <ProductCategory style={{background: "#e5e5e5"}}>
                  <ProductCategoryText>{data?.name}</ProductCategoryText>
                </ProductCategory>
    
                <DescriptionCategory style={{background: "#e5e5e5"}}>
                  <ProductCategoryText>{data?.desc}</ProductCategoryText>
                </DescriptionCategory>
    
                <ProductCategory style={{background: "#e5e5e5"}}>
                  <ProductCategoryText>
                    { new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(
                      data?.price
                    )}
                    </ProductCategoryText>
                </ProductCategory>
    
                <RemoveButton onClick={() => RemoveItem(data,i)}>
                  <ProductCategoryText style={{ color: "#FFFFFF" }}>X</ProductCategoryText>
                </RemoveButton>
              </ListItens>
              )
            })
          }
          </>
        </AdminPage>
            </>
          ) :
          (
            <>
            <Compras/>
            </>
          )
        }
      </Content>
    </Container>
  )
}

export default Admin;