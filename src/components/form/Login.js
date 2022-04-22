import React from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';

const Login = () => {
    return (
        <center>
            <Container>
                <Typography variant="h3">Login Form</Typography>
                <form>
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="email" label="Email" variant="outlined" /> < br />
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Password" variant="outlined" /> < br />
                    <Button variant="contained" color="primary">Login</Button>
                </form>
            </Container>
        </center>

    )
}
export default Login;