import React, { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {

    const [BtnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);

    const btnClasses = `${classes.button} ${BtnIsHighlighted ? classes.bump : ''}`
    const { items } = cartCtx
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    //    console.log(cartCtx);
    const numberOfCartItems = cartCtx.items.reduce((cartNumber, item) => {
        return cartNumber + item.amount
    }, 0)
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton