import classes from "./AvailableMeals.module.css";

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
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals;