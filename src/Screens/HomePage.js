import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import homeBackground from "../Assets/background.jpg";
import Link from '@mui/material/Link';

const name="Shubhangi Srivastava"
const current=new Date()
const currentDate= new Date(current).toLocaleDateString();
const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export default function HomePage(){

    const Navigate = useNavigate();
 
    const styles={
        root: {
            // height: "100vh",
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: 'white'
        },
        innerContainer: {
            width: "100%",
            height: '80vh',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-between',
            alignItems:"center",
            padding: '2% 2% 0',
        },
        button:{
            width: '250px',
            height:'50px',
            backgroundColor :"#ff8080",
            color:"#000000",
            fontWeight:"bold",
        },
        backStyle:{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height:"100vh",
        },
        headings:{
            display: 'flex',
            flexDirection: 'column',
            justityContent: 'center',
            alignItems: 'center'
        },
        buttonContainer: {
            marginTop: '1%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    }
    return(
        <Grid style={styles.root}>
            <CssBaseline/>
            <div style={styles.backStyle} >
                <Grid style={styles.headings}>
                    <Typography component="h1" variant="h4" style={styles.welcomeHead}>
                        Welcome to the Reminder Application {name}
                    </Typography>
                    <Typography component="h1" variant="h5"style={styles.dateHead}  >
                        Today is {date}
                    </Typography>
                </Grid>
                <div style={styles.innerContainer}>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/set-reminder')}
                    >
                        Set Reminder
                    </Button>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/modify-reminder')}
                    >
                        Modify Reminder
                    </Button>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/disable-reminder')}
                    >
                        Disable Reminder
                    </Button>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/delete-reminder')}
                    >
                        Delete Reminder
                    </Button>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/enable-reminder')}
                    >
                        Enable Reminder
                    </Button>
                    <Button 
                        style={styles.button} 
                        variant="contained"
                        onClick={()=> Navigate('/view-reminder')}
                    >
                        View Reminder
                    </Button>
                </div>
                <div style={styles.buttonContainer} >
                    <Link 
                    underline="always"
                    onClick={() => {
                        Navigate('/logout')
                      }}
                    >
                        {"LogOut"}
                    </Link>
                </div>
            </div>
        </Grid>
    )
}