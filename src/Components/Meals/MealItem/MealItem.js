import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import  CartContext  from './../../../store/cart-context'
const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$ ${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        console.log(amount);
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <div className={classes.price}>
                    <span>{price}</span>
                </div>
            </div>
            <div>
                <MealItemForm id={props.id} addToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem