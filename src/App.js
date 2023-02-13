import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Family from './Components/Family';
import Recipes from './Components/Recipes';
import Recipe from './Components/Recipe';
import CreateRecipeForm from './Components/CreateRecipeForm';
import InviteFamily from './Components/InviteFamily';
import CreateItemForm from './Components/CreateItemForm';
import UpdateItemForm from './Components/UpdateItemForm';
import Pantry from './Components/Pantry';
import Reddit from './Components/Reddit';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const logOut = () => {
    //logout logic
  }
  return (
    <Router>
      <div className="App">
        <Navbar logOut={logOut} loggedIn={loggedIn}/>
        <Switch>
          <Route exact path='/' >
            <Reddit/>
          </Route>
          <Route exact path='/register' >
            <Register/>
          </Route>
          <Route exact path='/family' >
            <Family/>
          </Route>
          <Route exact path='/recipes' >
            <Recipes/>
          </Route>
          <Route exact path='/recipe/:id' >
            <Recipe/>
          </Route>
          <Route exact path='/create-recipe' >
          <CreateRecipeForm/>
            </Route>
          <Route exact path='/invite-family' >
            <InviteFamily/>
          </Route>
          <Route exact path='/create-item' >
            <CreateItemForm/>
          </Route>
          <Route exact path='/update-item/:id' >
            <UpdateItemForm/>
          </Route>
          <Route exact path='/pantry' >
            <Pantry/>
          </Route>
          <Route exact path='/reddit' >
            <Reddit/>
          </Route>
          <Route exact path='/login' >
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
