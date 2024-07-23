import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const CheckAuth = () => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log(auth)
                const response = await axios.get('http://localhost:3000/authCheck');
                if (response.data.auth) {
                    setAuth(response.data.auth);
                } else {
                    navigate('/api/login');
                }
            } catch (e) {
                console.error(e);
                navigate('/api/login');
            }
        };
        if(!auth)
        checkAuth();
    },);

    if (!auth) {
        return <div>Loading</div>;
    }

    console.log("OUTLET TRIGGERED");
    return <Outlet />;
};

export default CheckAuth;

