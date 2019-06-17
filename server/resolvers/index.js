const {resolver} = require('graphql-sequelize');
const db = require('../models');

const resolvers = {
  Query: {
    async house(obj, args) {
      const houseResult = await db.sequelize.query(`SELECT * FROM Houses WHERE id = $1`, {bind: [args.id]});
      const pointsResult = await db.sequelize.query(`SELECT SUM(quantity) AS points FROM PointAssignations WHERE house = $1`, {bind: [args.id]});
      const assignationsResult = await db.sequelize.query(`SELECT * FROM PointAssignations WHERE house = $1`, {bind: [args.id]});
      return {
        ...houseResult[0][0],
        points: (pointsResult[0][0] && pointsResult[0][0].points) || 0,
        assignations: assignationsResult[0]
      }
    },
    houses: resolver(db.House),
  },

  House: {
    async points(house) {
      const result = await db.sequelize.query(`SELECT SUM(quantity) AS points FROM PointAssignations WHERE house = ${house.id}`);
      return result[0][0].points || 0;
    }
  }
};

module.exports = resolvers;
