import sequelize from "../config/database.js";
import admin from "./admin_user.js";
import client from "./client_user.js";
import Hotel from "./Hotel.js";
import Room from "./Room.js";
import Booking from "./Booking.js";
import "./helpers/associations.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Database & tables created!");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

export { sequelize };
export { syncDatabase };
export { admin };
export { client };
export { Hotel };
export { Room };
export { Booking };

