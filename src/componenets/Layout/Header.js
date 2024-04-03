import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCardButton";


const Header = () =>{
return(
<Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Atable full of delicious food "/>
    </div>
</Fragment>
);
}
export default Header;