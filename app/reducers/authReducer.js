function authReducer(state, action) {
    if(typeof state === 'undefined') {
        return {
            loggedIn: false,
            loggingIn: false
        }
    }
    switch(action.type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                loggingIn: false
            };
 
        case 'LOGOUT':
            return {
                loggedIn: false,
                loggingIn: false
            };

        case 'FETCH_USER':
            return {
                loggedIn: false,
                loggingIn: true
            };

        default:
            return state;
    }
}

module.exports = authReducer;
