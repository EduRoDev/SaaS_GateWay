
import ClientUser from "../models/client_user.js";
import sequelize from "../config/database.js";

class ClientRepo {
  async findAll() {
    try {
      return await ClientUser.findAll();
    } catch (error) {
      console.error("Error finding all clients:", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await ClientUser.findByPk(id);
    } catch (error) {
      console.error(`Error finding client by ID (${id}):`, error);
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      return await ClientUser.findOne({ where: { email: email } });
    } catch (error) {
      console.error(`Error finding client by email (${email}):`, error);
      throw error;
    }
  }

  async findByName(name) {
    try {
      return await ClientUser.findOne({ where: { name: name } });
    } catch (error) {
      console.error(`Error finding client by name (${name}):`, error);
      throw error;
    }
  }

  async create(client) {
    const transaction = await sequelize.transaction();
    try {
      const newClient = await ClientUser.create(client, { transaction });
      await transaction.commit();
      return newClient;
    } catch (error) {
      await transaction.rollback();
      console.error("Error creating client:", error);
      throw error;
    }
  }

  async update(id, clientData) {
    const transaction = await sequelize.transaction();
    try {
      const client = await ClientUser.findByPk(id);
      if (client) {
        await ClientUser.update(clientData, { where: { id: id }, transaction });
        await transaction.commit();
        return client;
      }
      await transaction.rollback();
      return null;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error updating client (${id}):`, error);
      throw error;
    }
  }

  async delete(id) {
    const transaction = await sequelize.transaction();
    try {
      const client = await ClientUser.findByPk(id);
      if (client) {
        await ClientUser.destroy({ where: { id: id }, transaction });
        await transaction.commit();
        return true;
      }
      await transaction.rollback();
      return false;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error deleting client (${id}):`, error);
      throw error;
    }
  }
}

export default ClientRepo;
