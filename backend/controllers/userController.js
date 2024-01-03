const User =require('../models/userModel')
//login user
const loginUser = async (req, res) => {
    res.json({message: 'login users'})
}

//signup user

const signupUser = async (req, res) => {
   const {username,email, password} = req.body
    try{
        const user = await User.signup(username,email, password)
        res.status(200).json({user,email}) 
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    loginUser,
    signupUser
}