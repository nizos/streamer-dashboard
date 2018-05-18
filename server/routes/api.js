const DATABASE          = 'mongodb://StreamerDashboardDBAdmin:OKGJbhny35xaixbB7mklQhBT56TE@ds117960.mlab.com:17960/streamerdashboarddb';
const express           = require('express');
const router            = express.Router();
var status              = require('http-status');
var mongoose            = require('mongoose');
var ClientUser          = require('../models/clientUser');
var clientUser;

mongoose.connect(DATABASE, err => {
    if(err) {
        console.log('Error! ' + err);
    } else {
        console.log('API connected to mongodb');
    }
});


function getCredentials() {
    ClientUser.findOne({id: '116069219'}), function(err, client) {
        if(err) {
            console.log('Error from getCredentials() in api.js');
            console.log(err);
        } else {
            console.log('Success: found clientUser with id: ', id, ' in database');
            console.log(client);
            this.clientUser = client;
        }
    }
}
// GET a user by ID.
router.get('/user/:userId', (req, res) => {
    var userId = req.params.userId;

    // Check first if it is a valid Id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send({
            message: 'User Id is invalid'
        });
    }
    ClientUser.findUserById(userId, function (err, userFound) {
        if (err) return res.status(status.BAD_REQUEST).json(err);
        // We serve as json the user found
        res.status(status.OK).json(userFound);
    });
});

module.exports = router;
