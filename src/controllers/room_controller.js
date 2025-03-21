import RoomServices from "../services/room_services.js";

class RoomController {
  constructor() {
    this.roomServices = new RoomServices();
  }

  async findAll(req, res) {
    try {
      const rooms = await this.roomServices.findAll();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Error finding all rooms" });
    }
  }

  async findById(req, res) {
    try {
      const room = await this.roomServices.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by id" });
    }
  }

  async findByName(req, res) {
    try {
      const room = await this.roomServices.findByName(req.params.name);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by name" });
    }
  }

  async findByPrice(req, res) {
    try {
      const room = await this.roomServices.findByPrice(req.params.price);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by price" });
    }
  }

  async findByType(req, res) {
    try {
      const room = await this.roomServices.findByType(req.params.type);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by type" });
    }
  }

  async findByCapacity(req, res) {
    try {
      const room = await this.roomServices.findByCapacity(req.params.capacity);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by capacity" });
    }
  }

  async findByAvailable(req, res) {
    try {
      const room = await this.roomServices.findByAvailable(
        req.params.available
      );
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error finding room by available" });
    }
  }

  async create(req, res) {
    try {
      const room = await this.roomServices.create(req.body);
      res.status(201).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error creating room" });
    }
  }

  async update(req, res) {
    try {
      const room = await this.roomServices.update(req.params.id, req.body);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error updating room" });
    }
  }

  async delete(req, res) {
    try {
      const room = await this.roomServices.delete(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error deleting room" });
    }
  }
}

export default RoomController;
