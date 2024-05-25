import { authService } from "./authService";


export const initialState = {
    user: authService.user()
};


const StateReducerService = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default StateReducerService;