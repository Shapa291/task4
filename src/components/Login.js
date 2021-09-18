import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { yahooProvider, gitHubProvider, googleProvider } from './authMethods';
import socialMediaAuth from './auth';
import ChartBox from './chart';
const Login = () => {

        const handleOnClick = async (provider) => {
             await socialMediaAuth(provider)
        };

        return (
            <Container>
                <Grid container
                    style = {{height: window.innerHeight - 50, marginTop: 20}}
                    alignItems = {"baseline"}
                    justifyContent = {"center"}
                >
                    <Grid style = {{width: 400, backgroundColor: 'lightgray'}}
                        container
                        alignItems = {"center"}
                        direction = {"column"}
                    >
                        <Box p = {10}>
                            <Button onClick = {() => handleOnClick(yahooProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Yahoo</Button>
                            <Button onClick = {() => handleOnClick(gitHubProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Github</Button>
                            <Button onClick = {() => handleOnClick(googleProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Google</Button>
                        </Box>
                        <ChartBox/>
                    </Grid>
                </Grid>
            </Container>
        );
};

export default Login;
