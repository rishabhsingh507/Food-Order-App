import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Chocolate items delievered to you</h2>
            <p>
                Choose your favorite delicacy from our broad selection of available treats
                and enjoy a delicious chocolate item for your special occasion.
            </p>
            <p>
                All our dishes are made with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;