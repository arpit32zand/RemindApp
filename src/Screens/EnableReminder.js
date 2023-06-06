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
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function EnableReminder (){

    const Navigate = useNavigate();

    const [subject, setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [contactNo,setContactNo] = useState('');
    const [smsNo,setSMSNo] = useState('');
    const [Rsubject, setRSubject] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
      setSubject(event.target.value);
    };
    const handleRChange = (event) => {
        setRSubject(event.target.value);
      };

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const styles={
        root: {
            height: "110vh",
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        backStyle:{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: "110vh",
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
                        Enable Reminder
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
                                    value={subject}
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
                                Reminder
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                            <FormControl size="small" style={{margin:0}}>
                                <InputLabel id="demo-simple-select-label" >Subject</InputLabel>
                                <Select
                                    style={{width: '15rem'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Rsubject}
                                    label="Subject"
                                    onChange={handleRChange}
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
                              Description
                            </Typography>
                        </div>
                        <div style={styles.valueContain}>
                        <TextField
                            style={{width: '15rem'}}
                            id="outlined-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={4}
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
                        onClick={() => {
                            Navigate('/home')
                          }}
                    >
                        Back
                    </Button>
                    <Button 
                        variant="contained"
                        onClick={handleClickOpen}
                        >
                            Confirm
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                             <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Reminder Enabled Successfully
                                </DialogContentText>
                             </DialogContent>
                             <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                    ok
                                </Button>
                             </DialogActions>
                        </Dialog>
                </div>
                <div style={{marginLeft:"80%"}}>
                <Link
                     underline="always"
                     onClick={() => {
                        Navigate('/logout')
                      }}>
                        {"LogOut"}
                    </Link>
                </div>
            </div>
        </Grid>
    )
}
