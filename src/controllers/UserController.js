const { findOne } = require('../models/User');
const User = require('../models/User');


module.exports = {


    async index (req, res) {

        return res.json( await User.findAll());
    },

    async findOne(req, res){
        const { user_id } = req.params; 

        return res.json (await User.findByPk(user_id));
    },
    async store (req, res) {          

        const {name, email} = req.body;
        const user = await User.create({name, email});

        return res.json(user);
    }
}



