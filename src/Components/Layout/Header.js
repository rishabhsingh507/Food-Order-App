import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Chocolate ROom</h1>
                <HeaderCardButton />
            </header>
            <div className={classes['main-image']}>
                <img src="https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/chocolate-industry-1619632472826.png" alt="Chocolates" />
            </div>
        </Fragment>
    )
}

export default Header;