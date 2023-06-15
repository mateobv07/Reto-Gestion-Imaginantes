import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './styles.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#36b4c5',
      },
    },
  });

const LoginCard = ({credentials, setCredentials, login, invalidCredetials}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className="login-fields-container margin-top-login">
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
                    sx={{mx:12, mt:3, color:'#FFFFFF', borderRadius:'25px'}}
                    onClick={login}>
                        Iniciar sesión
            </Button>
        </div>
        </ThemeProvider>

    );
}

export default LoginCard;