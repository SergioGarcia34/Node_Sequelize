
const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {

    async index(req, res){
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: {association: 'addresses'}
        });

        return  res.json(user);
    },

    async store(req, res){
        const {user_id} = req.params;
        const { name } = req.body;
                
        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'user not found'})
        }
        
        const adress = await  Address.create({
            zipcode, street, number, user_id
        })
    return res.json(adress);

    }
}

