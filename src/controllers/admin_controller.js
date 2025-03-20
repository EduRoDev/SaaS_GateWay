import AdminServices from "../services/admin_services.js";

class AdminController {
  constructor() {
    this.adminService = new AdminServices();
  }

  async getAllAdmins(req, res) {
    try {
      const admins = await this.adminService.getAllAdmins();
      res.status(200).json(admins);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting all admins", error: error.message });
    }
  }

  async getAdminById(req, res) {
    try {
      const admin = await this.adminService.getAdminById(req.params.id);
      res.status(200).json(admin);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting admin by ID", error: error.message });
    }
  }

  async getAdminByEmail(req, res) {
    try {
      const admin = await this.adminService.getAdminByEmail(req.params.email);
      res.status(200).json(admin);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error getting admin by email",
          error: error.message,
        });
    }
  }

  async getAdminByName(req, res) {
    try {
      const admin = await this.adminService.getAdminByName(req.params.name);
      res.status(200).json(admin);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting admin by name", error: error.message });
    }
  }

  async createAdmin(req, res) {
    try {
      const admin = await this.adminService.createAdmin(req.body);
      res.status(201).json(admin);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating admin", error: error.message });
    }
  }

  async updateAdmin(req, res) {
    const { id } = req.params;
    try {
      const admin = await this.adminService.updateAdmin(id, req.body);
      if (admin) {
        res.status(200).json({ message: "Admin updated", admin: admin });
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating admin" });
    }
  }

  async deleteAdmin(req, res) {
    const { id } = req.params;
    try {
      const success = await this.adminService.deleteAdmin(id);
      if (success) {
        res.status(200).json({ message: "Admin deleted" });
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting admin" });
    }
  }
}

export default AdminController;