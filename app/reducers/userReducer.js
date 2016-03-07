function userReducer(state, action) {
    if(typeof state === 'undefined') {
        return null 
    }
    switch(action.type) {
        case 'LOGIN':
            return action.user;

        default: 
            return state
    }
}

module.exports = userReducer;
