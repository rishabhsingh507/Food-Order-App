import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chocolate Brownie Sundae',
        description: 'Finest dark chocolate',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Eskimo Waffle',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Ice Cream Sundae',
        description: 'American, raw, tasty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Chocolate Fondue',
        description: 'Healthy...and delicious...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;