const fetch =require('node-fetch');

const url = "https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users";
const method ={method: 'get'};

async function serviceUsersAsync() 
{   
    try {
        let response = await fetch(url,method);
        let data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
  
}

module.exports = serviceUsersAsync;