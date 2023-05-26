const router = require('express').Router();
const route = {
    frontend: require('./frontend-route'),
    //admin   : require('./admin-route')
}

const appUse = {
    '/'       : route.frontend,
   // '/admin'  : route.admin
} 

for (let i in appUse){
    router.use(i, appUse[i]);
}

module.exports = router