
var admin = require("firebase-admin");

var serviceAccount = require("./grupp-uppgift1-user-systemet-firebase-adminsdk-hxjaa-67e9d55a14.json");

var uid = process.argv[2]
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, {admin:true})
.then(()=>{
console.log('custom claims set for user', uid)
process.exit()
})
.catch(error => {
    console.log(error)
    process.exit(1)
})