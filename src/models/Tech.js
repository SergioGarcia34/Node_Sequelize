const {Model, DataTypes} = require('sequelize');

class Tech extends Model{
    static init(sequelize){

        super.init({
            name: DataTypes.STRING
          },
        {
            sequelize
        }
        )
    }

    static associate(models){
    //Relacionamento muitos para muitos, onde through é o nome da tabela intermediaria entre users e techs
        this.belongsToMany((models.User, { foreignKey:'tech_id', through:'user_techs', as:'users' }));
    }
}

module.exports = Tech;
