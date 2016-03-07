var Firebase = require('Firebase');
var push = require('react-router-redux').push;

var userActions = {
    initAuth: function() {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            var auth = ref.getAuth();
            console.log(auth);
            if(auth) {
                dispatch(authed());
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
                    dispatch(login(dataSnapshot.val()));
                },
                function(error) {
                    //ERROR
                }
            )
        }
    },
    login: function(user) {
        return { type: 'LOGIN', user } 
    },
    signupWithEmail: function(email, password) {
        var login = this.login;
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.createUser({ email, password }, function(error, userData) {
                if(error) {
                    console.log(error);
                    //ERROR
                }
                else {
                    dispatch(login(userData));
                    console.log(push);
                    dispatch(push('/'));
                }
            });
        }
    },
    signupWithFacebook: function() {
        return function(dispatch) {


        } 
    },
    authed: function() {
        return { type: 'AUTHED' }
    }
};

module.exports = userActions;
