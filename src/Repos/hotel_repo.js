import sequelize from "../config/database.js";
import Hotel from "../models/hotel.js";
class HotelRepository {
  async findAll() {
    try {
      return await Hotel.findAll();
    } catch (error) {
      console.error("Error finding all hotels:", error);
      throw error;
    }
  }
  async findById(id) {
    try {
      return await Hotel.findByPk(id);
    } catch (error) {
      console.error(`Error finding hotel by ID (${id}):`, error);
      throw error;
    }
  }

  async findByName(name) {
    try {
      return await Hotel.findOne({ where: { name: name } });
    } catch (error) {
      console.error(`Error finding hotel by name (${name}):`, error);
      throw error;
    }
  }
  async create(hotel) {
    const transaction = await sequelize.transaction();
    try {
      const newHotel = await Hotel.create(hotel, { transaction });
      await transaction.commit();
      return newHotel;
    } catch (error) {
      await transaction.rollback();
      console.error("Error creating hotel:", error);
      throw error;
    }
  }
  async update(id, hotelData) {
    const transaction = await sequelize.transaction();
    try {
      const hotel = await Hotel.findByPk(id);
      if (hotel) {
        await Hotel.update(hotelData, { where: { id: id }, transaction });
        await transaction.commit();
        return hotel;
      }
      await transaction.rollback();
      return null;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error updating hotel (${id}):`, error);
      throw error;
    }
  }
  async delete(id) {
    const transaction = await sequelize.transaction();
    try {
      const hotel = await Hotel.findByPk(id);
      if (hotel) {
        await Hotel.destroy({ where: { id: id }, transaction });
        await transaction.commit();
        return true;
      }
      await transaction.rollback();
      return false;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error deleting hotel (${id}):`, error);
      throw error;
    }
  }
}

export default HotelRepository;