import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './styles.css';

const LoginCard = ({credentials, setCredentials, login, invalidCredetials}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="login-fields-container">
                <TextField
                fullWidth
                error={invalidCredetials && !credentials.password ? true : false}
                sx={{mb:3}}
                variant="standard"
                label="Matricula"
                value={credentials.studentID}
                onChange={(e) => setCredentials({...credentials, studentID:e.target.value})}
                />
                <TextField
                error={invalidCredetials && !credentials.password ? true : false}
                sx={{mb:3, minWidth:"350px"}}
                label="Contraseña"
                variant="standard"
                onChange={(e) => setCredentials({...credentials, password:e.target.value})}
                value={credentials.password}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment:(
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                        edge="end"
                        >
                        {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
            <Button disabled={credentials.studentID && credentials.password ? false : true}
                    variant="contained"
                    sx={{mx:12}}
                    onClick={login}>
                        Login
            </Button>
        </div>
        </>

    );
}

export default LoginCard;