import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Context } from '..';


import { facebookProvider, gitHubProvider, googleProvider, twitterProvider } from './authMethods';
import socialMediaAuth from './auth';

const Login = () => {

        const {auth} = useContext(Context)

        const handleOnClick = async (provider) => {
            const res = await socialMediaAuth(provider)
            console.log(res);
        };

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
                            <Button onClick = {() => handleOnClick(facebookProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Facebook</Button>
                            <Button onClick = {() => handleOnClick(gitHubProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Github</Button>
                            <Button onClick = {() => handleOnClick(googleProvider)} style = {{marginBottom: 30}} variant = {"outlined"}>Войти с помощью Google</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
};

export default Login;
