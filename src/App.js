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
function App() {
  const AppStates = {
    Register: 0,
    Family: 1,
    Recipes: 2,
    Recipe: 3,
    CreateRecipeForm: 4,
    InviteFamily: 5,
    CreateItemForm: 6,
    UpdateItemForm: 7,
    Pantry: 8,
    Reddit: 9,
    Login: 10,
    Logout: 11
  }
  const [AppState, navigate] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false)
  const logOut = () => {
    //logout logic
  }
  return (
    <div className="App">
      <Navbar navigate={navigate} AppStates={AppStates} logOut={logOut} loggedIn={loggedIn}/>
      {()=>{
        switch (AppState) {
          case AppStates.Register: return <Register/>;
          case AppStates.Family: return <Family/>;
          case AppStates.Recipes: return <Recipes/>;
          case AppStates.Recipe: return <Recipe/>;
          case AppStates.CreateRecipeForm: return <CreateRecipeForm/>;
          case AppStates.InviteFamily: return <InviteFamily/>;
          case AppStates.CreateItemForm: return <CreateItemForm/>;
          case AppStates.UpdateItemForm: return <UpdateItemForm/>;
          case AppStates.Pantry: return <Pantry/>;
          case AppStates.Reddit: return <Reddit/>;
          case AppStates.Login: return <Login/>;
          default: return <Register/>;
        }
      }}
    </div>
  );
}

export default App;
