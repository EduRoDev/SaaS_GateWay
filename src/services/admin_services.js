import AdminRepo from "../Repos/admin_repo.js";

class AdminServices {
  constructor() {
    this.adminRepo = new AdminRepo();
  }

  async getAllAdmins() {
    try {
      return await this.adminRepo.findAll();
    } catch (error) {
      console.error("Error getting all admins:", error);
      throw error;
    }
  }

  async getAdminById(id) {
    try {
      const admin = await this.adminRepo.findById(id);
      if (!admin) {
        throw new Error(`Admin with ID ${id} not found`);
      }
      return admin;
    } catch (error) {
      console.error(`Error getting admin by ID (${id}):`, error);
      throw error;
    }
  }

  async getAdminByEmail(email) {
    try {
      const admin = await this.adminRepo.findByEmail(email);
      if (!admin) {
        throw new Error(`Admin with email ${email} not found`);
      }
      return admin;
    } catch (error) {
      console.error(`Error getting admin by email (${email}):`, error);
      throw error;
    }
  }

  async getAdminByName(name) {
    try {
      const admin = await this.adminRepo.findByName(name);
      if (!admin) {
        throw new Error(`Admin with name ${name} not found`);
      }
      return admin;
    } catch (error) {
      console.error(`Error getting admin by name (${name}):`, error);
      throw error;
    }
  }

  async createAdmin(adminData) {
    try {
      return await this.adminRepo.create(adminData);
    } catch (error) {
      console.error("Error creating admin:", error);
      throw error;
    }
  }

  async updateAdmin(id, adminData) {
    try {
      const admin = await this.adminRepo.update(id, adminData);
      if (!admin) {
        throw new Error(`Admin with ID ${id} not found`);
      }
      return admin;
    } catch (error) {
      console.error(`Error updating admin (${id}):`, error);
      throw error;
    }
  }

  async deleteAdmin(id) {
    try {
      const success = await this.adminRepo.delete(id);
      if (!success) {
        throw new Error(`Admin with ID ${id} not found`);
      }
      return success;
    } catch (error) {
      console.error(`Error deleting admin (${id}):`, error);
      throw error;
    }
  }
}

export default AdminServices;
