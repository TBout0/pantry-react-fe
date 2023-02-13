import { Button } from "@mui/material";
import {Link} from 'react-router-dom'
const Navbar = ({loggedIn,logout}) => {
    return ( 
        <nav className="navbar">
            <h2>Collaborative Cuisine</h2>
            <div className="buttons">
                <Link to="/reddit"><Button variant="contained" >Reddit</Button></Link>
                {loggedIn &&<Link to="/family"><Button variant="contained"  >Family</Button></Link>}
                {loggedIn &&<Link to="/invite-family"><Button variant="contained" >Invite Family</Button></Link>}
                {loggedIn &&<Link to="/recipes"><Button variant="contained">Recipe's</Button></Link>}
                {loggedIn &&<Link to="/create-recipe"><Button variant="contained" >Create Recipe</Button></Link>}
                {loggedIn &&<Link to="/panty"><Button variant="contained">Pantry</Button></Link>}
                {loggedIn &&<Link to="/create-item"><Button variant="contained">Create Item</Button></Link>}
                {loggedIn &&<Button variant="contained" onClick={logout}>Log Out</Button>}
                {!loggedIn &&<Link to="/log-in"><Button variant={"contained"}>Log In</Button></Link>}
                {!loggedIn &&<Link to="/Register"><Button variant="contained" >Register</Button></Link>}
            </div>
        </nav>
    );
}
 
export default Navbar;