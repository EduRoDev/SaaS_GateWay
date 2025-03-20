import AdminUser from "../models/admin_user.js";
import sequelize from "../config/database.js";

class AdminRepo {
  async findAll() {
    try {
      return await AdminUser.findAll();
    } catch (error) {
      console.error("Error finding all admins:", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await AdminUser.findByPk(id);
    } catch (error) {
      console.error(`Error finding admin by ID (${id}):`, error);
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      return await AdminUser.findOne({ where: { email: email } });
    } catch (error) {
      console.error(`Error finding admin by email (${email}):`, error);
      throw error;
    }
  }

  async findByName(name) {
    try {
      return await AdminUser.findOne({ where: { name: name } });
    } catch (error) {
      console.error(`Error finding admin by name (${name}):`, error);
      throw error;
    }
  }

  async create(admin) {
    const transaction = await sequelize.transaction();
    try {
      const newAdmin = await AdminUser.create(admin, { transaction });
      await transaction.commit();
      return newAdmin;
    } catch (error) {
      await transaction.rollback();
      console.error("Error creating admin:", error);
      throw error;
    }
  }

  async update(id, adminData) {
    const transaction = await sequelize.transaction();
    try {
      const admin = await AdminUser.findByPk(id);
      if (admin) {
        await AdminUser.update(adminData, { where: { id: id }, transaction });
        await transaction.commit();
        return admin;
      }
      await transaction.rollback();
      return null;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error updating admin (${id}):`, error);
      throw error;
    }
  }

  async delete(id) {
    const transaction = await sequelize.transaction();
    try {
      const admin = await AdminUser.findByPk(id);
      if (admin) {
        await AdminUser.destroy({ where: { id: id }, transaction });
        await transaction.commit();
        return true;
      }
      await transaction.rollback();
      return false;
    } catch (error) {
      await transaction.rollback();
      console.error(`Error deleting admin (${id}):`, error);
      throw error;
    }
  }
}

export default AdminRepo;
