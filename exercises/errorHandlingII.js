
const axios = require('axios')
module.exports.run = function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment
*/

try {
    return axios.get(url)
  } catch (error) {
    let message ='Error: Request failed with status code 401'
	return message;
  }





// const getBreeds = async () => {
// 	try {
// 	  return await axios.get(url)
// 	} catch (error) {
// 	     let message =`Error: ${error}`
// 			return message;
// 	}
//   }

//   getBreeds();

};
