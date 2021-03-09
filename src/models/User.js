const {Model, DataTypes} = require('sequelize');

class User extends Model{
    
    static init(sequelize){

        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize
        }
        )
    }

    static associate(models){
        this.hasMany(models.Address , { foreignKey: 'user_id', as: 'addresses' });
        
    //Relacionamento muitos para muitos, onde through é o nome da tabela intermediaria entre users e techs
        this.belongsToMany((models.Techs, { foreignKey:'user_id', through:'user_techs', as:'techs' }));
    }
}


module.exports = User;
