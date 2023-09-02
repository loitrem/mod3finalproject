// const User = require('../../models/User');

// const getUserId =  async (token)=>{
//   console.log('gettoken!!',getToken());
//   return getToken().user._id
// }

// const getToken=(req,res)=> {
// const token = req.body
//   if (!token) return null;
//   // Obtain the payload of the token
//   const tokenSplit = JSON.parse(atob(token.split('.')[1]));

//   return tokenSplit._id;
// }

// module.exports = {
//   getUserId
// };


// // A new client connection request received
// wsServer.on('connection', function(connection) {
//   // Generate a unique code for every user
//   const userId = uuidv4();
//   console.log(`Recieved a new connection.`);

//   // Store the new connection and handle messages
//   clients[userId] = connection;
//   console.log(`${userId} connected.`);
// });
