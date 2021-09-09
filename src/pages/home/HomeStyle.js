import styled from 'styled-components';
export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* background: #E1F1DD; */
  height: fit-content;
  /* padding: 5px; */
`;
export const RecipeCard = styled.div`
  height: 300px;
  background: #E1F1DD;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;
export const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
`;
export const Button = styled.button`
  background-color: #00ADB5;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;
export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;
export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;