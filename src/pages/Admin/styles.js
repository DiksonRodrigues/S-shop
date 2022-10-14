import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  height: 100%;

  background-color: #f7ede2;
`;

export const CategoryContent = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  border: 0;
  cursor: pointer;

  background-color: #6c584c;
`;

export const CategoryTitle = styled.p`
  color: #FFFFFF;
  font-size: 22px;
`;

export const AdminPage = styled.div`
  width: 100%;
  height: 700px;

  padding: 25px 30px;
`;

export const AdminHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.p`
  font-size: 20px;

`;

export const SubCategory = styled.p`
  font-size: 20px;
  opacity: .5;
  color: #8d99ae;
  margin-left: 5px;
`;

export const ContentPage = styled.div`
  width: 90%;
  margin-top: 20px;
  justify-content: center;
  display: flex;
`;

export const ListItens = styled.div`
  width: 90%;
  margin-top: 40px;

  justify-content: center;
  display: flex;

`;

export const HeaderComponent = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  margin-right: 20px;
`;

export const ProductTile = styled.h1`
 font-size: 22px;

 margin-bottom: 10px;
`;

export const ProductInput = styled.input`
  width: 220px;
  height: 35px;
  padding-left: 5px;
`;

export const DescriptionInput = styled.input`
  width: 500px;
  height: 35px;
  padding-left: 5px;
`;

export const ButtonContainer = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background-color: #6c584c;

  align-self: flex-end;
`;
export const ButtonText = styled.p`
  font-size: 24px;

  color: #FFFFFF;
`;

export const ProductCategory = styled.div`
  width: 220px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  display: flex;
  margin-right: 20px;

  background-color: #d4a373;
`;

export const DescriptionCategory = styled.div`
  width: 550px;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 20px;

  background-color: #d4a373;
`;

export const ProductCategoryText = styled.div`
  font-size: 22px;
`;

export const RemoveButton = styled.button`
  width: 220px;
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
