import {
    Alert,
    AlertTitle,
    Button,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Stack,
} from '@mui/material';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const Register = ({ isRegistered, setIsRegistered }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [passwordError, setPasswordError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    const { username, password, confirmPassword } = userInfo;
    const [type , setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if(type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType('password');
        }
} 

    const handleUser = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, username: value };
        });
    };

    const handlePassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, password: value };
        });
    };

    const handleConfirmPassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, confirmPassword: value };
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            if (password === confirmPassword) {
                setIsRegistered(true);
                setEmptyError(false);
                setPasswordError(false);
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
    };

    return (
        <>
                <Grid>
                    <FormControl sx={{ width: '300px' }} variant="standard">
                        <InputLabel>Username</InputLabel>
                        <Input type="text" required value={username} onChange={handleUser}
                        />
                    </FormControl>
                    {emptyError && username === '' && (
                        <Stack sx={{ width: '300px', margin: 'auto' }}>
                            <Alert severity="error">
                                Field must not be empty!
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '300px' }} variant="standard">
                        <InputLabel>Password</InputLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <span onClick={handleToggle}><Icon icon={icon} size = {25}/></span>     
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && password === '' && (
                        <Stack sx={{ width: '300px', margin: 'auto' }}>
                            <Alert severity="error">
                                Field must not be empty!
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '300px' }} variant="standard">
                        <InputLabel>Confrim Password</InputLabel>
                        {/* <span onClick={handleToggle}><Icon icon={icon} size = {25}/></span> */}
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                    <span onClick={handleToggle}><Icon icon={icon} size = {25}/></span>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && confirmPassword === '' && (
                        <Stack sx={{ width: '300px', margin: 'auto' }}>
                            <Alert severity="error">
                                Cannot Be Empty
                            </Alert>
                        </Stack>
                    )}
                    {passwordError && password !== confirmPassword && (
                        <Stack sx={{ width: '300px', margin: 'auto' }}>
                            <Alert severity="error">
                                Password doesn't Match
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid mt={2}>
                    <Button onClick={handleRegister} variant="contained" color="primary">
                        Register
                    </Button>
                </Grid>
                <Grid mt={3}>
                    {isRegistered ? (
                        <Stack sx={{ width: '300px', margin: 'auto' }}>
                            <Alert severity="success">
                                <AlertTitle>Congratulations</AlertTitle>
                                {`Registered ${username}`}
                            </Alert>
                        </Stack>
                    ) : (
                        ''
                    )}
                </Grid>
        </>
    );
};

export default Register;