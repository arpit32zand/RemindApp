import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
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
            height: "100vh",
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        backStyle:{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: "100vh",
        },
        headings:{
            display: 'flex',
            flexDirection: 'column',
            justityContent: 'center',
            alignItems: 'center',
            paddingTop: '2%'
        },
        container:{
            width: "40%",
            margin: "2% auto 0",
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            padding: '1%'
        },
        key:{
            fontSize: '1.3rem',
            fontFamily: "Roboto,Helvetica, Arial",
            float: 'left'
        },
        fieldContainer:{
            display:'flex',
            flexDirection:"row",
            margin: '1% 0',
            justifyContent:"space-between",
        },
        valueContain:{
            // width:'70%'
        },
        buttonContainer: {
            marginTop: '2%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    }
    return(
        <Grid style={styles.root}>
            <div style={styles.backStyle} >
                <Grid style={styles.headings} >
                    <Typography component="h1" variant="h4" style={{color: 'white'}}>
                        Set New Reminder
                    </Typography>
                </Grid>
                <Paper elevation={6} style={styles.container}>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Select a date
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <TextField
                                style={{width: '15rem'}}
                                id="date"
                                size="small"
                                label="Select a date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Subject
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <FormControl size="small" style={{margin:0}}>
                                <InputLabel id="demo-simple-select-label" >Subject</InputLabel>
                                <Select
                                    style={{width: '15rem'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Subject"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Meeting"}>Meeting</MenuItem>
                                    <MenuItem value={"Deadline"}>Deadline</MenuItem>
                                    <MenuItem value={"Task"}>Task</MenuItem>
                                    <MenuItem value={"Appointment"}>Appointment</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Add Description
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <TextareaAutosize
                                style={{width: '14.7rem'}}
                                minRows={3}
                                placeholder="Enter Description"
                            />
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Email Address
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <TextField
                                variant="outlined"
                                required
                                style={{width: '15rem'}}
                                size="small"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                type="text"
                                placeholder="E-mail"
                                name="email"
                                onChange={(text) => setEmail(text)}
                            />
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Contact No
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <TextField
                                variant="outlined"
                                style={{width: '15rem'}}
                                required
                                size="small"
                                label="Contact Number"
                                autoComplete="phone number"
                                autoFocus
                                type="text"
                                placeholder="Enter your Contact no"
                                name="email"
                                onChange={(text) => setContactNo(text)}
                            />
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                SMS Number
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <TextField
                                variant="outlined"
                                required
                                style={{width: '15rem'}}
                                size="small"
                                label="Email Address"
                                autoComplete="phone number"
                                autoFocus
                                type="text"
                                placeholder="Enter your Contact no"
                                name="email"
                                onChange={(text) => setSMSNo(text)}
                            />
                        </div>
                    </div>
                    <div style={styles.fieldContainer}>
                        <div style={styles.keyContain}>
                            <Typography style={styles.key}>
                                Recur for next
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <FormGroup style={{display:'flex',flexDirection:'row'}}>
                                <FormControlLabel control={<Checkbox size="small" />} label="7 Days" />
                                <FormControlLabel control={<Checkbox size="small" />} label="5 Days" />
                                <FormControlLabel control={<Checkbox size="small" />} label="3 Days" />
                                <FormControlLabel control={<Checkbox size="small" />} label="2 Days" />
                            </FormGroup>
                        </div>
                    </div>
                </Paper>
                <div style={styles.buttonContainer} >
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
                {/* <div>
                    <Link href="#" underline="always">
                        {"LogOut"}
                    </Link>
                </div> */}
            </div>
        </Grid>
    )
}
