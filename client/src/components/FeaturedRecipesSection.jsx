import React from 'react';
import styled from '@emotion/styled';

const FeaturedContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #ffffff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1);
`;

const FeaturedTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #000000;
`;

const FeaturedText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 20px;
`;

const RecipeGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const RecipeCard = styled.div`
  width: 300px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 10px;
`;

const RecipeDescription = styled.p`
  font-size: 1rem;
  color: #000000;
`;

const FeaturedRecipesSection = () => {
  return (
    <FeaturedContainer>
      <FeaturedTitle>Featured Recipes</FeaturedTitle>
      <FeaturedText>Discover our handpicked selection of this month's must-try recipes.</FeaturedText>
      <RecipeGrid>
        <RecipeCard>
          <RecipeImage src="https://via.placeholder.com/300x200" alt="Recipe 1" />
          <RecipeContent>
            <RecipeTitle>Recipe 1</RecipeTitle>
            <RecipeDescription>A brief description of Recipe 1.</RecipeDescription>
          </RecipeContent>
        </RecipeCard>
        <RecipeCard>
          <RecipeImage src="https://via.placeholder.com/300x200" alt="Recipe 2" />
          <RecipeContent>
            <RecipeTitle>Recipe 2</RecipeTitle>
            <RecipeDescription>A brief description of Recipe 2.</RecipeDescription>
          </RecipeContent>
        </RecipeCard>
        <RecipeCard>
          <RecipeImage src="https://via.placeholder.com/300x200" alt="Recipe 3" />
          <RecipeContent>
            <RecipeTitle>Recipe 3</RecipeTitle>
            <RecipeDescription>A brief description of Recipe 3.</RecipeDescription>
          </RecipeContent>
        </RecipeCard>
      </RecipeGrid>
    </FeaturedContainer>
  );
}

export default FeaturedRecipesSection;
