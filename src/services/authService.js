const authService = {
    setUser() {
        const _tempData = {};
        return _tempData;
    },
    removeUser() {
        localStorage.removeItem('flugafen');
        return null;
    },
    user() {
        const _tempData = JSON.parse(localStorage.getItem('flugafen'));
        if (!_tempData) return null;

        const user = (_tempData);
        
        // console.log("user", user)
        return {
            token: user?.token,
            id: user?.data?.id,
            role: user?.data?.role,
            username: user?.data.username,
        };
    }
}

export {authService};