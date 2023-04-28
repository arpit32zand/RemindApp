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
import homeBackground from "../Assets/background.jpg";
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
        root: {
            // height: "100vh",
            // backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // color: 'white'
        },
        backStyle:{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height:"100vh",
            alignItems:'center'
        },
        headContainer:{
            // // width: "100%",
            // // height: '80vh',
            // display: "flex",
            // flexDirection: "column",
            justifyContent: 'space-between',
            // alignItems:"center",
            padding: '5% 10% 0',
        },
        dateCont:{
            display:'flex',
            flexDirection:"row",
            // alignItems:"center",
            // // paddingBottom:"1%",
            paddingTop:"1%",
            paddingLeft:"1%",
            justifyContent:"space-around",
        },
        headings:{
            display: 'flex',
            flexDirection: 'column',
            justityContent: 'center',
            alignItems: 'center'
        }
    }
    return(
        <Grid style={styles.root}>
            <div style={styles.backStyle} >
                <Grid style={styles.headings} >
                <Typography component="h1" variant="h4" style={styles.welcomeHead}>
                    Set New Reminder
                </Typography>
                </Grid>
                <div style={styles.headContainer}>
                    <div style={styles.dateCont}>
                        <Typography component="h1" variant="h5" style={{paddingRight:'2%'}}>
                            Select a date:-
                        </Typography>
                        <TextField
                            style={{
                                right:'25%'
                                // color: 'white'
                            }}
                            id="date"
                            label="Select a date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div>
                    <div style={styles.dateCont}>
                        <Typography component="h1" variant="h5" style={{paddingRight:'8%'}}>
                            Subject:-
                        </Typography>
                        <FormControl sx={{ m: 1, minWidth: 150 }} size="medium" style={{right:"25.5%"}}>
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
                        <Typography component="h1" variant="h5" style={{paddingLeft:'1.5%'}}>
                            Add Description:-
                        </Typography>
                        <TextareaAutosize
                            // aria-label="minimum height"
                            minRows={3}
                            placeholder="Enter Description"
                            style={{right:"30%"}}
                        />
                    </div>
                    <div style={styles.dateCont}>
                        <Typography component="h1" variant="h5" style={{paddingLeft:'1.5%'}}>
                            Email Address:-
                        </Typography>
                        <TextField
                            variant="outlined"
                            required
                            style={{right:"21%"}}
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
                        <Typography component="h1" variant="h5" style={{paddingLeft:'0.5%'}}>
                            Contact No :-
                        </Typography>
                        <TextField
                            variant="outlined"
                            required
                            style={{right:"20%"}}
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
                        <Typography component="h1" variant="h5" style={{paddingLeft:'1.5%'}}>
                            SMS Number :-
                        </Typography>
                        <TextField
                            variant="outlined"
                            required
                            style={{right:"21%"}}
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
                        <FormGroup style={{display:'flex',flexDirection:'row',paddingRight:"20%",}}>
                            <FormControlLabel control={<Checkbox/>} label="7 Days" />
                            <FormControlLabel control={<Checkbox />} label="5 Days" />
                            <FormControlLabel control={<Checkbox />} label="3 Days" />
                            <FormControlLabel control={<Checkbox />} label="2 Days" />
                        </FormGroup>
                    </div>
                </div>
                <div style={styles.dateCont} >
                    <Button 
                        variant="contained"
                    >
                        Back
                    </Button>
                    <Button 
                        variant="contained"
                    >
                        Confirm
                    </Button>
                </div>
                <div>
                <Link href="#" underline="always">
                    {"LogOut"}
                </Link>
                </div>
            </div>
        </Grid>
    )
}
