var Firebase = require('Firebase');
var push = require('react-router-redux').push;

var userActions = {
    initAuth: function() {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            var authed = ref.getAuth();
            if(authed) {
                dispatch({ type: 'AUTH' });
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
                            dispatch(push('/'));
                        }
                    });
                }
            });
        }
    },
    loginWithEmail: function(email, password) {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.authWithPassword({
                "email": email,
                "password": password 
            }, function(error, auth) {
                if(error) {
                    console.log(error);
                    //ERROR
                } 
                else {
                    dispatch({ type: 'AUTH' });
                    dispatch(push('/'));
                }
            });
        }
    },
    authWithFacebook: function(pathOnComplete) {
        return function(dispatch) {
            var ref = new Firebase("https://dbhs2017.firebaseio.com/");
            ref.authWithOAuthPopup('facebook', function(error, uid) {
                if(error) {
                    console.log(error);
                    //ERROR
                } 
                else {
                    dispatch({ type: 'AUTH' })
                    dispatch(push(pathOnComplete))
                }
            })
             
        } 
    }
};

module.exports = userActions;
