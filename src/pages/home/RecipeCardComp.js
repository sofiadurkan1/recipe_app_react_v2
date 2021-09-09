import React from 'react';
import { RecipeCard, RecipeImage, Button, RecipeHeader } from './HomeStyle';
import defaultImg from '../../assets/default-image.jpg';
import { useHistory } from 'react-router';

const RecipeCardComp = ({ recipe }) => {
  let history = useHistory();
  const moreClick = () => {
    history.push({ pathname: '/details', recipe: recipe });
  };

  return (
    <RecipeCard>
      <RecipeHeader>{recipe?.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImg} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;