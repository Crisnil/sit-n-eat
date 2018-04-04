/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var _ = require('lodash');
 module.exports = {
   create: function (req, res) {
     if (req.body.password !== req.body.confirmPassword) {
       return res.json(401, res, "Password doesn't match")
     }

     var allowedParameters = [
       "email", "password"
     ]

     var data = _.pick(req.body, allowedParameters);

     User.create(data).then(function (user) {
       var responseData = {
         user: user,
         token: JwtService.issue({id: user.id})
       }
       return res.json(200, res, "User created successfully",responseData)
     }).catch(function (error) {
         if (error.invalidAttributes){
           return res.json(400, res, error, error.Errors)
         }
       }
     )

   }
 };
