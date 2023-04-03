const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

//const getConnection = require('../libs/postgres');
//const pool = require('../libs/postgres.pool');
const { models } = require ('./../libs/sequelize');

class UserService {
  constructor() {
   // this.pool = pool;
   // this.pool.on('error', (err) => console.error(err));
  }

 /* async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }*/

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password; //Este comando es para que la api no devuelva la constraseña del usuarios ni el hash
    return newUser;
  }

  async find() {
    //const query = 'SELECT * FROM task';
    const rta = await models.User.findAll({
      include: ['customer']
    });
   // const rta = await this.pool.query(query);
    //return rta.rows;
    return rta;
  }
  
  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user){
     throw  boom.notFound('User not found');
    }
    return user;
    //return { id };
  }

  async update(id, changes) {
//    const user = await models.User.findByPk(id);
  const user = await this.findOne(id);
  const rta = await user.update(changes);
    return rta;
   /* {
      id,
      changes,
    };*/
  }

  async delete(id) {
    //const user = await models.User.findByPk(id);
    const user = await this.findOne(id);
    await user.destroy();
    return { id }
    //return { id };
  }
}

module.exports = UserService;
