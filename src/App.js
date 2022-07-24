import {useEffect, useState} from "react";
import "./App.css"
import Products from "./components/Products/Products";
import {Route, Switch} from "react-router-dom";
import Info from "./components/Info/Info";
import Example from "./components/SiteLoader/Example";
import {useSelector} from "react-redux";

function App() {
    const {products, setProducts} = useState([]);
    // const {loading} = useSelector(state => state.simpleReducer)


    return (

        <>
            <Switch>
                <Route exact path="/info/:id" component={Info}/>
                <Route exact path="/" component={Products}/>
            </Switch>
        </>
    );
}

export default App;
