import axios from 'axios';
import { authService } from './authService';

const getToken = () => {
    const user = authService.user();
    if (user) {
        return user?.token || '';
    }

    return '';
}

export const httpRequest = axios.create({
    headers: {
        Authorization: 'Bearer ' + getToken()
    }
});