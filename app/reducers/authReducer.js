function authReducer(state, action) {
    if(typeof state === 'undefined') {
        return false; 
    }
    switch(action.type) {
        case 'AUTH':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}

module.exports = authReducer;
