import React, { useState } from "react";
import {Route, Navigate, Outlet} from 'react-router-dom';
const token = localStorage.getItem('token');
console.log(token)
const useAuth = () => {
    if (token === null) {
        return false;
    }
    return true;
}
const PrivateRoute = () => {

}

export default PrivateRoute;