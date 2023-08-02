import { Fragment, useEffect } from "react";
import mealImage from './../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {

    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
    useEffect(() => {
        console.log(isAuthenticated);
        console.log(user);
    }, [isAuthenticated])
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />

                <ul>
                    {/* 
                    <li>
                        <button onClick={loginWithPopup}>loginWithPopup</button>
                    </li>
                    <li>
                        <button onClick={loginWithRedirect}>loginWithRedirect</button>
                    </li> */}
                    {isAuthenticated && <li>
                        <button onClick={logout}>logout</button>
                    </li>}
                </ul>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='A table of delicious food' />
            </div>

        </Fragment>
    )
}

export default Header