import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Pending", "Confirmed", "Cancelled"),
    allowNull: false,
    defaultValue: "Pending",
  },
});


export default Booking;
