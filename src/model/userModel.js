import { httpRequest } from "../services/httpRequest";


export const userLoginForm = (obj) => {
    const data = {
        email: obj.email,
        password: obj.password,
    };
    return httpRequest.post(paths.api.userLogin, data);
};
