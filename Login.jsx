import {
    Alert,
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const [userDetail, setUserDetail] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(false);
    const { username, password } = userDetail;

    const handleUser = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, username: value };
        });
    };

    const handlePassword = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, password: value };
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === userDetail.username && password === userDetail.password) {
            setIsLoggedIn(true);
            setError(false);
        } else {
            setError(true);
            setIsLoggedIn(false);
        }
    };

    return (
        <>
            <Box component="form" sx={{ margin: '5rem auto', padding: '5rem', }}>
                <Grid>
                    <FormControl sx={{ width: '300px' }} variant="standard">
                        <InputLabel>Username:</InputLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={handleUser}
                        />
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '300px' }} variant="standard">
                        <InputLabel>Password:</InputLabel>
                        <Input type="password" value={password} onChange={handlePassword}/>
                    </FormControl>
                </Grid>
                <Grid mt={2}>
                    <Button onClick={handleLogin} variant="contained" color="secondary">
                        Login
                    </Button>
                </Grid>

                <Grid>
                    {error &&
                        username !== userDetail.username &&
                        password !== userDetail.password && (
                            <Stack>
                                <Alert>
                                    There is no account made with the following username and password
                                </Alert>
                            </Stack>
                        )}
                </Grid>
            </Box>
        </>
    );
};

export default Login;