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
        var auth = this.auth;
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.createUser({ email, password }, function(error, userData) {
                if(error) {
                    console.log(error);
                    //ERROR
                }
                else {
                    dispatch(auth(userData));
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
    authorize: function(token) {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.auth(token, function(error, auth) {
                if(error) {
                    console.log(error);
                } 
                else {
                    dispatch(auth());
                }
            });
        }
    },
    auth: function() {
        return { type: 'AUTH' };
    }
};

module.exports = userActions;
