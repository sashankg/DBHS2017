function authReducer(state, action) {
    if(typeof state === 'undefined') {
        return false; 
    }
    switch(action.type) {
        case 'AUTHED':
            return true;
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}

module.exports = authReducer;
