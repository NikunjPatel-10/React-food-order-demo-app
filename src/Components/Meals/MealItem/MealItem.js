import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`
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
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem