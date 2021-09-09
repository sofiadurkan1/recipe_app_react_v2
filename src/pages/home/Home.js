import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from '../../assets/home.svg';
import { MainContainer, HomeImg, ImgDiv } from './HomeStyle';

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];


const APP_ID = "9f6ec58d";
const APP_KEY = "72bce85c5e7a5fa158c770ebc1647545"

// const APP_ID = process.env.REACT_APP_APP_ID;
// const APP_KEY = process.env.REACT_APP_KEY;



const Home = () => {
    const [query, setQuery] = useState('pizza');
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  
    const getData = async () => {
      if (query !== '') {
        const result = await axios.get(url);
        //console.log(result);
        if (!result.data.more) {
          alert(`No food with such ${query} `);
        }
        setRecipes(result.data.hits);
        setQuery('');
      } else {
        console.log('Please fill the form');
      }
    };
  
    // useEffect(() => {
    //   getData();
    // });
  
    return (
      <div>
        <Header
          setQuery={setQuery}
          query={query}
          getData={getData}
          mealTypes={mealTypes}
          setMeal={setMeal}
          meal={meal}
        />
        {recipes ? (
          <MainContainer>
            {recipes?.map((recipe, index) => (
              <RecipeCardComp key={index} recipe={recipe.recipe} />
            ))}
          </MainContainer>
        ) : (
          <ImgDiv>
            <HomeImg src={homeSvg} />
          </ImgDiv>
        )}
      </div>
    );
  };
  
  export default Home;
  