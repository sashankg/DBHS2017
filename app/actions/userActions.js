var userActions = {
    initAuth: function() {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            var auth = ref.getAuth;
            if(auth) {
                dispatch(fetchUser(auth.uid));
            }
        } 
    },
    fetchUser: function(uid) {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/users/" + uid);
            ref.once(
                'value',
                function(dataSnapshot) {
                    console.log(dataSnapshot);
                },
                function(error) {
                
                }
            )
        }
    },
    login: function() {
        return { type: 'LOGIN' } 
    }
};

module.exports = userActions;
