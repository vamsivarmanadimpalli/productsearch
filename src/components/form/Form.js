import React from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';

const Form = () => {
    return (
        <center>
            <Container>
                <Typography variant="h2">Contact Form</Typography>
                <form>
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Name" variant="outlined" /> < br />
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="email" label="Email" variant="outlined" /> < br />
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Number" variant="outlined" /> < br />
                    <TextField style={{ "width": "500px", "margin": "5px" }} type="text" label="Address" variant="outlined" /> < br />
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
            </Container>
        </center>

    )
}
export default Form;