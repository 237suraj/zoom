import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Default from "./Pages/Default/Default";
import './App.css'
import NewYearEvents from './Pages/Collection/NewYearEvents/NewYearEvents';
import GreatFood from './Pages/Collection/GreatFood/GreatFood';
import NewOpend from './Pages/Collection/NewOpend/NewOpend';
import DessertPlaces from './Pages/Collection/DessertPlaces/DessertPlaces';
import Collections from './Pages/Collection/Collections/Collections';
import Delivery from './Pages/Delivery/Delivery';
import PocketFriendlyDelivery from './Pages/PocketFriendlyDelivery/PocketFriendlyDelivery';
import Breakfast from './Pages/Breakfast/Breakfast';
import Lunch from './Pages/Lunch/Lunch';
import Dinner from './Pages/Dinner/Dinner';
import DrinksNightLife from './Pages/DrinksNightLife/DrinksNightLife';
import Cafes from './Pages/Cafes/Cafes';
import BuffetPlaces from './Pages/BuffetPlaces/BuffetPlaces';

function App() {
    return (
        <React.Fragment>
            <Router basename="/bangalore">
                <Switch>
                    <Route exact path={"/"} component={Default} />
                    <Route exact path={"/collections"} component={Collections} />
                    <Route exact path={"/new-years-eve-events"} component={NewYearEvents} />
                    <Route exact path={"/great-food-no-bull"} component={GreatFood} />
                    <Route exact path={"/newly-opened"} component={NewOpend} />
                    <Route exact path={"/dessert-places"} component={DessertPlaces} />
                    <Route exact path={"/delivery"} component={Delivery} />
                    <Route exact path={"/pocket-friendly-delivery"} component={PocketFriendlyDelivery} />
                    <Route exact path={"/breakfast"} component={Breakfast} />
                    <Route exact path={"/lunch"} component={Lunch} />
                    <Route exact path={"/dinner"} component={Dinner} />
                    <Route exact path={"/drinks-and-nightlife"} component={DrinksNightLife} />
                    <Route exact path={"/cafes"} component={Cafes} />
                    <Route exact path={"/restaurants"} component={BuffetPlaces} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
