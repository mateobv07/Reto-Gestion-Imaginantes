import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
    const navigate = useNavigate();

    useEffect(() => {
        //login();
      }, []);

    const login = () => {
        axios.post(('http://localhost:3000/user/login'),
        {
            studentID: 'A01635675',
            password: 'password123'
        })
        .then(res => {
            setUser(res.data.user);
            localStorage.setItem('User', res.data.user);
            localStorage.setItem('Auth', 'Bearer ' + res.data.accessToken);
            navigate('/');
        })
    }

    return (
        <h1 onClick={login}>Pagina login CLICK ME TO LOGIN</h1>
    );
}

export default Login;