import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import AdminUser from "./admin_user.js";
import Room from "./Room.js";
import Booking from "./Booking.js";

const Hotel = sequelize.define("Hotel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});


export default Hotel;
