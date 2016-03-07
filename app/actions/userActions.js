var Firebase = require('Firebase');
var push = require('react-router-redux').push;

var userActions = {
    initAuth: function() {
        var auth = this.auth;
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            var authed = ref.getAuth();
            if(authed) {
                dispatch(auth());
            }
        }
    },
    signupWithEmail: function(email, password) {
        var authWithPassword = this.authWithPassword;
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.createUser({ email, password }, function(error, userData) {
                if(error) {
                    console.log(error);
                    //ERROR
                }
                else {
                    dispatch(authWithPassword(email, password));
                    dispatch(push('/'));
                }
            });
        }
    },
    signupWithFacebook: function() {
        return function(dispatch) {

        } 
    },
    authWithPassword: function(email, password) {
        var auth = this.auth;
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.authWithPassword({
                "email": email,
                "password": password 
            }, function(error, auth) {
                if(error) {
                    console.log(error);
                } 
                else {
                    dispatch({ type: 'AUTH' });
                }
            });
        }

    },
    authWithToken: function(token) {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.auth(token, function(error, auth) {
                if(error) {
                    console.log(error);
                } 
                else {
                    dispatch({ type: 'AUTH' });
                }
            });
        }
    },
};

module.exports = userActions;
