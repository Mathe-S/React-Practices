import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal'
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setisErr] = useState('');

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  },[]);

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch('https://hookspractice-ab900.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'appliation/json'}
    }).then(response => {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [...prevIngredients, 
        {id: responseData.name, ...ingredient }]);
      
    }).catch(err => {
      setIsLoading(false);
      setisErr('Something Went Wrong');
    });
  }

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    fetch(`https://hookspractice-ab900.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
  }).then( response => {
    setIsLoading(false);
    setUserIngredients(prevIngs => prevIngs.filter(id => id.id!==ingredientId));
  })
  .catch(err => {
    setIsLoading(false);
    setisErr('Something Went Wrong');
  });
    
  }

  const closeHandler = () => {
    setisErr('');
  }

  return (
    <div className="App">
      <IngredientForm 
      onAddIngredient={addIngredientHandler}
      loading = {isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>

      {isErr && <ErrorModal onClose={closeHandler}>{isErr}</ErrorModal>}
    </div>
  );
}

export default Ingredients;
