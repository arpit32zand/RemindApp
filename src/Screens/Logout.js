import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import homeBackground from "../Assets/background.jpg";
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";



export default function Logout(){

    const Navigate = useNavigate();

    const styles={
        root: {
            height: "100vh",
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: 'white',
            justifyContent:'center'
        },
        image: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: "100vh",
            width:"200vh",
            alignItems:"center"
        },
        container:{
            width: "40%",
            // margin: "10% auto 0",
            marginTop:"20%",
            marginLeft:"30%",
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            paddingLeft: '1%',
            alignItems:'center'
        },
    }
    return(
        <Grid container component="main" style={styles.root}>
            <CssBaseline />
            <div style={styles.image}>
            <Paper elevation={6} style={styles.container}>
             <Typography component="h1" variant="h5" style={styles.signHead}>
                    You have been logged out
             </Typography>
             <Link
              underline="always"
              onClick={() => {
                  Navigate('/')
                }}>
             {"Okay"}
             </Link>
             </Paper>
             </div>
        </Grid>
    )
}