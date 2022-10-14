import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;

  padding: 25px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 10px;
  border-radius: 10px;


  background-color: #f7ede2;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: 9%;
  margin-bottom: 10px;

  display: flex;
`;

export const DescriptionContainer = styled.div`
  width: 50%;

  margin-right: 30px;
`;

export const CategoryBox = styled.div`
  width: 80%;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d4a373;
`;

export const DescriptionBox = styled.div`
  width: 105%;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 25px;

  background-color: #FFFFFF;
`;

export const CategoryTitle = styled.p`
  font-size: 32px;
`;

export const ProductName = styled.p`
  font-size: 22px;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ItemBox = styled.div`
  width: 80%;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  background-color: #FFFFFF;
`;

export const ItemName = styled.p`
  
`;

export const ItemButton = styled.div`
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;


  background-color: #FFFFFF;
`;

export const QuantityItem = styled.input`
  width: 30%;
  height: 95%;
  border-radius: 5px;
  margin-right: 5px;
  padding-left: 5px;
  border: 0;
  color: #FFFFFF;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #FFFFFF;
  }
  :-ms-input-placeholder {
     color: #FFFFFF;
  }

  background-color: #d4a373;

`;

export const AddItemBox = styled.button`
  width: 70%;
  height: 95%;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #6c584c;
`;

export const AddItemTile = styled.p`
  color: #FFFFFF;
`;
