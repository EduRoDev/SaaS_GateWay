import { where } from "sequelize";
import sequelize from "../config/database.js";
import Room from "../models/room.js";

class RoomsRepo {
  async findAll() {
    try {
      return await Room.findAll();
    } catch (error) {
      console.error("Error finding all rooms", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await Room.findByPk(id);
    } catch (error) {
      console.error("Error finding room by id", error);
      throw error;
    }
  }

  async findByName(name) {
    try {
      return await Room.findOne({ where: { name } });
    } catch (error) {
      console.error("Error finding room by name", error);
      throw error;
    }
  }

  async findByPrice(price) {
    try {
      return await Room.findOne({ where: { price } });
    } catch (error) {
      console.error("Error finding room by price", error);
      throw error;
    }
  }

  async findByType(type) {
    try {
      return await Room.findOne({ where: { type } });
    } catch (error) {
      console.error("Error finding room by type", error);
      throw error;
    }
  }

  async findByCapacity(capacity) {
    try {
      return await Room.findOne({ where: { capacity } });
    } catch (error) {
      console.error("Error finding room by capacity", error);
      throw error;
    }
  }

  async findByAvailable(available) {
    try {
      return await Room.findOne({ where: { available } });
    } catch (error) {
      console.error("Error finding room by available", error);
      throw error;
    }
  }

  async create(room) {
    const transaction = await sequelize.transaction();
    try {
      const newBooking = await Room.create(room, { transaction });
      await transaction.commit();
      return newBooking;
    } catch (error) {
      await transaction.rollback();
      console.error("Error creating room", error);
      throw error;
    }
  }

  async update(id, roomData) {
    const transaction = await sequelize.transaction();
    try {
      const room = await Room.findByPk(id);
      if (room) {
        await room.update(roomData, { where: { id: id }, transaction });
        await transaction.commit();
        return room;
      }
      await transaction.rollback();
      return null;
    } catch (error) {
      await transaction.rollback();
      console.error("Error updating room", error);
      throw error;
    }
  }

  async delete(id) {
    const transaction = await sequelize.transaction();
    try {
      const room = await Room.findByPk(id);
      if (room) {
        await room.destroy({ where: { id: id }, transaction });
        await transaction.commit();
        return "Room deleted successfully";
      }
      await transaction.rollback();
      return null;
    } catch (error) {
      await transaction.rollback();
      console.error("Error deleting room", error);
      throw error;
    }
  }
}

export default RoomsRepo;
