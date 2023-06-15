import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard/LoginCard'
import '../App.css'

const Login = ({setUser}) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({studentID: "", password: ""});
    const [invalidCredetials, setInvalidCredetials] = useState(false);

    const login = () => {
        axios.post(('http://localhost:3000/user/login'),credentials)
        .then(res => {
            setUser(res.data.user);
            localStorage.setItem('User',  JSON.stringify(res.data.user));
            localStorage.setItem('Auth', 'Bearer ' + res.data.accessToken);
            navigate('/');
        }).catch((err) => {
            setInvalidCredetials(true);
            setCredentials({studentID: credentials.studentID, password: ""})
        });
    }

    return (
        <div className="login-container">
            <img src="./assets/login.jpg" alt="Imaginantes" className="login-img"/>
            <div>
                <h1>Iniciar sesión</h1>
                <LoginCard credentials={credentials} setCredentials={setCredentials} login={login} invalidCredetials={invalidCredetials}/>
            </div>
        </div>

    );
}

export default Login;