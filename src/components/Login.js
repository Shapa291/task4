import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';

const Login = () => {
        return (
            <Container>
                <Grid container
                    style = {{height: window.innerHeight - 50, marginTop: 20}}
                    alignItems = {"baseline"}
                    justify = {"center"}
                >
                    <Grid style = {{width: 400, backgroundColor: 'lightgray'}}
                        container
                        alignItems = {"center"}
                        direction = {"column"}
                    >
                        <Box p = {10}>
                            <Button style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Google</Button>
                            <Button style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Facebok</Button>
                            <Button variant = {"outlined"}>Войти с помощью Twitter</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
};

export default Login;