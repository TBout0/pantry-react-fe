import { Button } from "@mui/material";
const Navbar = ({navigate, AppStates,loggedIn,logout}) => {
    return ( 
        <nav className="navbar">
            <h2>Collaborative Cuisine</h2>
            <div className="buttons">
                <Button variant="contained" onClick={()=>navigate(AppStates.Reddit)}>Reddit</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.Family)}>Family</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.InviteFamily)}>Invite Family</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.Recipes)}>Recipe's</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.CreateRecipeForm)}>Create Recipe</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.Pantry)}>Pantry</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.CreateItemForm)}>Create Item</Button>
                <Button variant="contained" onClick={()=>navigate(AppStates.Register)}>Register</Button>
                {loggedIn && <Button variant="contained" onClick={()=>navigate(AppStates.Logout)}>Log Out</Button>}
                <Button variant="contained" onClick={()=>navigate(AppStates.Login)}>Log In</Button>
            </div>
        </nav>
    );
}
 
export default Navbar;