import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
// import { Navigate } from "react-router-dom";

export default function SetReminder (){

    const [age, setAge] = useState('');
    const [email,setEmail] = useState('');
    const [contactNo,setContactNo] = useState('');
    const [smsNo,setSMSNo] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const styles={
        headContainer:{
           marginTop:"3%",
           width:"80%"
        },
        welcomeHead:{
            // marginTop: "1%",
            paddingLeft: '25%',
            alignItems:"center",
            marginRight:"10%"
            // color:'white'
        },
        dateCont:{
            display:'flex',
            flexDirection:"row",
            alignItems:"center",
            // paddingBottom:"1%",
            paddingTop:"1%",
            paddingLeft:"1%",
            // justifyContent:"space-around",
            marginRight:"30%",
            marginHorizontal:"3%"
        }
    }
    return(
        <Grid>
            <Typography component="h1" variant="h4" style={styles.welcomeHead}>
             Set New Reminder
            </Typography>
            <div style={styles.headContainer}>
                <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                Select a date:-
                </Typography>
                <TextField
                    style={{left:"2%"}}
                    id="date"
                    label="Select a date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                 Subject:-
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{paddingLeft:"3%"}}>
                    <InputLabel id="demo-simple-select-label" style={{paddingLeft:"12%"}}>Subject</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Subject"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Meeting</MenuItem>
                    <MenuItem value={20}>Deadline</MenuItem>
                    <MenuItem value={30}>Task</MenuItem>
                    <MenuItem value={30}>Appointment</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                    Add Description:-
                </Typography>
                <TextareaAutosize
                    // aria-label="minimum height"
                    minRows={3}
                    placeholder="Enter Description"
                    style={{ width: 200, paddingLeft:"3%" }}
                 />
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                    Email Address:-
                </Typography>
                <TextField
                    variant="outlined"
                    required
                    style={styles.formBox}
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    onChange={(text) => setEmail(text)}
                />
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                    Contact No :-
                </Typography>
                <TextField
                    variant="outlined"
                    required
                    style={styles.formBox}
                    label="Contact Number"
                    autoComplete="phone number"
                    autoFocus
                    type="text"
                    placeholder="Enter your Contact no"
                    name="email"
                    onChange={(text) => setContactNo(text)}
                />
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                    SMS Number :-
                </Typography>
                <TextField
                    variant="outlined"
                    required
                    style={styles.formBox}
                    label="Email Address"
                    autoComplete="phone number"
                    autoFocus
                    type="text"
                    placeholder="Enter your Contact no"
                    name="email"
                    onChange={(text) => setSMSNo(text)}
                />
            </div>
            <div style={styles.dateCont}>
                <Typography component="h1" variant="h5" style={styles.welcomeHead}>
                   Recur for next:-
                </Typography>
                <FormGroup style={{display:'flex',flexDirection:'row',}}>
                    <FormControlLabel control={<Checkbox/>} label="7 Days" />
                    <FormControlLabel control={<Checkbox />} label="5 Days" />
                    <FormControlLabel control={<Checkbox />} label="3 Days" />
                    <FormControlLabel control={<Checkbox />} label="2 Days" />
                </FormGroup>
            </div>
            </div>
            <div>
                <Button 
                    variant="contained"
                    // color="primary"
                >
                    Back
                </Button>
                <Button 
                    variant="contained"
                    // color="primary"
                >
                    Confirm
                </Button>
            </div>
            <div>
            <Link href="#" underline="always">
                {"LogOut"}
            </Link>
            </div>
        </Grid>
    )
}
