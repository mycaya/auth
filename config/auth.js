// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    /*'facebookAuth': {
        'clientID': '', // your App ID
        'clientSecret': '', // your App Secret
        'callbackURL': 'http://localhost:3000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },
*/
    'googleAuth': {
        'clientID': '737194955216-l3ajm9cqmnk60f0e30pjtg6vuu5ms003.apps.googleusercontent.com', // your Client ID
        'clientSecret': 'Gl0y4_KjhUk47-6nw4U89aDE', // your Client Secret
        'callbackURL': 'http://localhost:3000/auth/google/callback'
    } /*,

    // 'instagramAuth': {
    //     'clientID': '',
    //     'clientSecret': ' ',
    //     'callbackURL': 'http://127.0.0.1:3000/auth/instagram/callback'
    // },

    'githubAuth': {
        'clientID': '',
        'clientSecret': '',
        'callbackURL': "http://localhost:3000/auth/github/callback"
    },

    'twitterAuth': {
        'consumerKey': '',
        'consumerSecret': '',
        'callbackURL': "http://localhost:3000/auth/twitter/callback"
    }, */
};