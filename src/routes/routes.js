import express from "express";
import ClientController from "../controllers/client_controller.js";
import AdminController from "../controllers/admin_controller.js";
import HotelController from "../controllers/hotel_controller.js";
import RoomController from "../controllers/room_controller.js";

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

//Hotel-Admin routes
router.get("/hotels", (req, res) =>
  new HotelController().findAll(req, res)
);
router.get("/hotels/:id", (req, res) =>
  new HotelController().findById(req, res)
);
router.get("/hotels/name/:name", (req, res) =>
  new HotelController().findByName(req, res)
);
router.post("/hotels", (req, res) =>
  new HotelController().create(req, res)
);
router.put("/hotels/:id", (req, res) =>
  new HotelController().update(req, res)
);
router.delete("/hotels/:id", (req, res) =>
  new HotelController().delete(req, res)
);

//Hotel-Rooms routes
router.get("/rooms", (req, res) =>
  new RoomController().findAll(req, res)
);
router.get("/rooms/:id", (req, res) =>
  new RoomController().findById(req, res)
);
router.get("/rooms/name/:name", (req, res) =>
  new RoomController().findByName(req, res)
);
router.get("/rooms/price/:price", (req, res) =>
  new RoomController().findByPrice(req, res)
);
router.get("/rooms/type/:type", (req, res) =>
  new RoomController().findByType(req, res)
);
router.get("/rooms/capacity/:capacity", (req, res) =>
  new RoomController().findByCapacity(req, res)
);
router.get("/rooms/available/:available", (req, res) =>
  new RoomController().findByAvailable(req, res)
);
router.post("/rooms", (req, res) =>
  new RoomController().create(req, res)
);
router.put("/rooms/:id", (req, res) =>
  new RoomController().update(req, res)
);
router.delete("/rooms/:id", (req, res) =>
  new RoomController().delete(req, res)
);

export default router;
