import { useState } from "react";
import { Alert, Button, Card, CardContent, CardHeader, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import  useFetch  from "../Hooks/useFetch";
import { Stack } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [createOrJoinFamily, setCreateOrJoinFamily] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [chosenFamilyId, setChosenFamilyId] = useState(-1);
    const [SearchedFamilies, setSearchedFamilies] = useState([]);
    const [searchFamilyName, setSearchFamilyName] = useState("");
    const [open, setOpen] = useState(false);

    const handleSearch = (e) => {
        console.log('active');
        setSearchFamilyName(e.target.value);
        searchFamilyByName();
    }
    const searchFamilyByName = () => {
        let error = null
        fetch(`https://localhost:7232/api/Family/ByName/${searchFamilyName}`)
        .then(res => res.json())
        .then(data => setSearchedFamilies(data))
        .catch(err => error = err);
        
        if (error === null){
            setOpen(true);
        }
    }
    return ( 
        <div className="register">
            <Card>
                <CardHeader title="Register"/>
                <CardContent>
                <TextField variant="outlined" label="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                <TextField variant="outlined" label="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                <TextField variant="outlined" label="Email" onChange={(e)=>setEmail(e.target.value)} className="wide"/>
                <TextField variant="outlined" label="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <TextField variant="outlined" label="Confirm Password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <FormControl className="wide">
                    <InputLabel >Select or Join Family</InputLabel>
                    <Select
                        value={createOrJoinFamily}
                        label="Select or Join Family"
                        onChange={(e)=>setCreateOrJoinFamily(e.target.value)}
                    >
                        <MenuItem value={'create'}>Create</MenuItem>
                        <MenuItem value={'join'}>Join</MenuItem>
                    </Select>
                </FormControl>
                {createOrJoinFamily === 'create' && <TextField variant="outlined" label="New Family Name" onChange={(e)=>setFamilyName(e.target.value)} className="wide"/>}
                {createOrJoinFamily === 'join' && 
                <FormControl className="wide">
                    <InputLabel >Search Family Name</InputLabel>
                    <Input id="Search Family Name"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch} edge="end" aria-label="send">
                                <SendIcon/>
                            </IconButton>

                        </InputAdornment>
                    }
                    />
                </FormControl>
                }
                {createOrJoinFamily !== '' && <Button size="large">Submit</Button>}
                </CardContent>
            </Card>
            <Stack><Snackbar open={open} autoHideDuration={3000} onClose={()=>setOpen(false)}><Alert severity="warning">Family Not Found</Alert></Snackbar></Stack>
        </div>
     );
}
 
export default Register;