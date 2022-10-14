import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;

  padding: 25px;
`;

export const UserInfoContent = styled.div`
  width: 100%;
  padding: 0 25px;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const UserInput = styled.input`
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
  width: 19.5%;
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

export const AddItemBox = styled.div`
  width: 70%;
  height: 95%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #6c584c;
`;

export const AddItemTile = styled.p`
  color: #FFFFFF;
`;

export const ProductCategoryText = styled.div`
  font-size: 22px;
`;

export const RemoveButton = styled.button`
  width: 290px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: flex;
  margin-right: 20px;

  background-color: #ef233c;
`;


export const PriceContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  
`;

export const FinishContainer = styled.div`

`;


export const TotalPrice = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;


export const FinishButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  background-color: #6c584c;
`;


export const FinishButtonText = styled.div`
  color: #FFFFFF;
`;


