import HotelServices from "../services/hotel_services.js";

class HotelController {
  constructor() {
    this.services = new HotelServices();
  }

async findAll(req, res) {
    try {
      const hotels = await this.services.findAll();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener todos los hoteles" });
    }
  }
async findById(req, res) {
    try {
      const hotel = await this.services.findById(req.params.id);
      if (hotel) {
        res.status(200).json(hotel);
      } else {
        res.status(404).json({ error: "No se encontró el hotel" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el hotel" });
    }
  }
async findByName(req, res) {
    try {
      const hotel = await this.services.findByName(req.params.name);
      if (hotel) {
        res.status(200).json(hotel);
      } else {
        res.status(404).json({ error: "No se encontró el hotel" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el hotel" });
    }
  }

async create(req, res) {
    try {
      const hotel = await this.services.create(req.body);
      res.status(201).json(hotel);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el hotel" });
    }
  }

async update(req, res) {
    try {
      const hotel = await this.services.update(req.params.id, req.body);
      if (hotel) {
        res.status(200).json(hotel);
      } else {
        res.status(404).json({ error: "No se encontró el hotel" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el hotel" });
    }
  }

async delete(req, res) {
    try {
      const hotel = await this.services.delete(req.params.id);
      if (hotel) {
        res.status(200).json({ message: "Hotel eliminado con éxito" });
      } else {
        res.status(404).json({ error: "No se encontró el hotel" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el hotel" });
    }
  }
}

export default HotelController;
