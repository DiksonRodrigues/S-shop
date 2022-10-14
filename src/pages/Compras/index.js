import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/itemlist";

import {
  Content,
  AdminPage,
  AdminHeader,
  Title,
  SubCategory,
  ListItens,
  ProductCategory,
  ProductCategoryText,
  DescriptionCategory,
} from "./styles";

function Compras() {
  const { compras, setCompras } = useContext(UserContext);

  useEffect(() => {
    let ArrayLocal = localStorage.getItem("ItemCesta");
    setCompras(JSON.parse(ArrayLocal));
  }, [compras]);

  return (
    <Content>
      <AdminPage>
        <AdminHeader>
          <Title>Admin {">"} </Title>
          <SubCategory>Compras</SubCategory>
        </AdminHeader>

        <ListItens>
          <ProductCategory>
            <ProductCategoryText>Nome</ProductCategoryText>
          </ProductCategory>

          <ProductCategory>
            <ProductCategoryText>Quantidade</ProductCategoryText>
          </ProductCategory>

          <ProductCategory>
            <ProductCategoryText>Total</ProductCategoryText>
          </ProductCategory>
        </ListItens>

        {compras ? (
          <>
            {compras.map((data, i) => {
              return (
                <ListItens style={{ marginTop: 10 }} key={data.name}>
                  <ProductCategory style={{ background: "#e5e5e5" }}>
                    <ProductCategoryText>{data?.name}</ProductCategoryText>
                  </ProductCategory>

                  <ProductCategory style={{ background: "#e5e5e5" }}>
                    <ProductCategoryText>{data?.quantity}</ProductCategoryText>
                  </ProductCategory>

                  <ProductCategory style={{ background: "#e5e5e5" }}>
                    <ProductCategoryText>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(data?.price * data?.quantity)}
                    </ProductCategoryText>
                  </ProductCategory>
                </ListItens>
              );
            })}
          </>
        ) : (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>Nenhum item adicionado</p>
          </div>
        )}
      </AdminPage>
    </Content>
  );
}

export default Compras;
