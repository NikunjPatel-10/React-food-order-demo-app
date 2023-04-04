import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';





const AvailableMeals = () => {

  const [meals, setmeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, sethttpError] = useState()
  // console.log(useState([]));

  /**
   * 
   * get the data from database
   */
  useEffect(() => {

    const fetchMeal = async () => {

      const response = await fetch('https://food-http-project-72f5f-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const responseData = await response.json();
      // console.log(responseData);

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
        // console.log(loadedMeal);
      }
      setmeal(loadedMeals);
      setIsLoading(false);
    }

    fetchMeal().catch((error) => {
      setIsLoading(false);
      sethttpError(error.message)
    });

  }, [])


  if (isLoading) {
    return (
      <section>
        <p className={classes.isLoading}>...loading</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.MealsError}>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
