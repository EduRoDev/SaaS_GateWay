import Hotel from "../hotel.js";
import Room from "../room.js";
import Booking from "../Booking.js";
import ClientUser from "../client_user.js";
import AdminUser from "../admin_user.js";

AdminUser.hasOne(Hotel, { foreignKey: "adminId", as: "hotel" });
Hotel.belongsTo(AdminUser, { foreignKey: "adminId", as: "admin" });

Hotel.hasMany(Room, { foreignKey: "hotelId", as: "rooms" });
Room.belongsTo(Hotel, { foreignKey: "hotelId", as: "hotel" });

Hotel.hasMany(Booking, { foreignKey: "hotelId", as: "bookings" });
Booking.belongsTo(Hotel, { foreignKey: "hotelId", as: "hotel" });

ClientUser.hasMany(Booking, { foreignKey: "clientId", as: "bookings" });
Booking.belongsTo(ClientUser, { foreignKey: "clientId", as: "client" });
