import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import homeBackground from "../Assets/background.jpg";

export default function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = () => {
        console.log("working")
    }

    const styles={
        root: {
            height: "100vh",
        },
        image: {
            backgroundImage: `url(${homeBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        signHead:{
            marginTop: "30%",
            paddingLeft: '43%',
        },
        form: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            padding: '2%',
            marginTop: "2%",
        },
        formBox:{
            width: '70%',
        },
    };
    return (
        <Grid container component="main" style={styles.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} style={styles.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Typography component="h1" variant="h5" style={styles.signHead}>
                    Sign in
                </Typography>
                <div style={styles.form} >
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required 
                        style={styles.formBox}
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(text) => setPassword(text)}
                    />
                    <Button
                        style={styles.formBox}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={()=>handleSubmit()}
                    >
                        Sign In
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}