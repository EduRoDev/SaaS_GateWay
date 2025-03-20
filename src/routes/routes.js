import express from "express";
import ClientController from "../controllers/client_controller.js";
import AdminController from "../controllers/admin_controller.js";

const router = express.Router();

// Client routes
router.get("/clients", (req, res) =>
  new ClientController().getAllClients(req, res)
);
router.get("/clients/:id", (req, res) =>
  new ClientController().getClientById(req, res)
);
router.get("/clients/email/:email", (req, res) =>
  new ClientController().getClientByEmail(req, res)
);
router.get("/clients/name/:name", (req, res) =>
  new ClientController().getClientByName(req, res)
);
router.post("/clients", (req, res) =>
  new ClientController().createClient(req, res)
);
router.put("/clients/:id", (req, res) =>
  new ClientController().updateClient(req, res)
);
router.delete("/clients/:id", (req, res) =>
  new ClientController().deleteClient(req, res)
);

// Admin routes
router.get("/admins", (req, res) =>
  new AdminController().getAllAdmins(req, res)
);
router.get("/admins/:id", (req, res) =>
  new AdminController().getAdminById(req, res)
);
router.get("/admins/email/:email", (req, res) =>
  new AdminController().getAdminByEmail(req, res)
);
router.get("/admins/name/:name", (req, res) =>
  new AdminController().getAdminByName(req, res)
);
router.post("/admins", (req, res) =>
  new AdminController().createAdmin(req, res)
);
router.put("/admins/:id", (req, res) =>
  new AdminController().updateAdmin(req, res)
);
router.delete("/admins/:id", (req, res) =>
  new AdminController().deleteAdmin(req, res)
);

export default router;
