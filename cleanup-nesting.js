const e = require("express");

// Clean up this code
function processUser(user){
    if (user !=null) {
        if (user.hasSubscription) {
            if (user.age >= 18){
                showFullVersion();    
            } else {
                showChildVersion();
            }
        } else {
            throw new Error('User needs a subscription');
        }
    } else  {
        throw new Error('No user found');
    }
}






// Possible refactor

function processUser(user){
    if (user ==null)
        throw new Error('No user found');

    if (!user.hasSubscription)
        throw new Error('User needs a subscription');

    if (user.age < 18)
        return showChildVersion();
    else
        return showFullVersion();       
}
