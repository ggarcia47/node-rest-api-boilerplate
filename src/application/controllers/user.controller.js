const dataUsers = require('../../domain/userDomain');

let userService={
    getUsers: async (req, res)=> {
      try {
        if(await dataUsers()===undefined){
          res.status(404).json({           
            "success": false,
            "msg": "countries not found"
        })
      }else{
        res.status(200).json({           
          "Users":  await dataUsers()
        })      
        }
      
    } catch (error) {
      console.log(error);
      res.status(500).json({           
      "success": false,
      
      "msg": "error when trying to search for countries"
    })           
    }             
  }, 
}

module.exports= userService;
