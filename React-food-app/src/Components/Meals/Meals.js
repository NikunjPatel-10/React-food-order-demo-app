import { Fragment } from "react"
import AvailableSummary from "./AvailableSummary"
import MealsSummary from "./MealsSummary"

const Meals = ()=>{
    return(
        <Fragment>
            <MealsSummary />
            <AvailableSummary />
        </Fragment>
    )
}
export default Meals