import ClientService from "../services/client_services.js";

class ClientController {
  constructor() {
    this.clientService = new ClientService();
  }

  async getAllClients(req, res) {
    try {
      const clients = await this.clientService.getAllClients();
      res.status(200).json(clients);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting all clients", error: error.message });
    }
  }

  async getClientById(req, res) {
    try {
      const client = await this.clientService.getClientById(req.params.id);
      res.status(200).json(client);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting client by ID", error: error.message });
    }
  }

  async getClientByEmail(req, res) {
    try {
      const client = await this.clientService.getClientByEmail(
        req.params.email
      );
      res.status(200).json(client);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error getting client by email",
          error: error.message,
        });
    }
  }

  async getClientByName(req, res) {
    try {
      const client = await this.clientService.getClientByName(req.params.name);
      res.status(200).json(client);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error getting client by name",
          error: error.message,
        });
    }
  }

  async createClient(req, res) {
    try {
      const client = await this.clientService.createClient(req.body);
      res.status(201).json(client);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating client", error: error.message });
    }
  }

  async updateClient(req, res) {
    const { id } = req.params;
    try {
      const client = await this.clientService.updateClient(id, req.body);
      if (client) {
        res.status(200).json({ message: "Client updated", client: client });
      } else {
        res.status(404).json({ message: "Client not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating client" });
    }
  }

  async deleteClient(req, res) {
    const { id } = req.params;
    try {
      const success = await this.clientService.deleteClient(id);
      if (success) {
        res.status(200).json({ message: "Client deleted" });
      } else {
        res.status(404).json({ message: "Client not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting client" });
    }
  }
}

export default ClientController;
