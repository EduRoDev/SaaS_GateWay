import ClientRepo from "../Repos/client_repo.js";

class ClientService {
  constructor() {
    this.clientRepo = new ClientRepo();
  }

  async getAllClients() {
    try {
      return await this.clientRepo.findAll();
    } catch (error) {
      console.error("Error getting all clients:", error);
      throw error;
    }
  }

  async getClientById(id) {
    try {
      const client = await this.clientRepo.findById(id);
      if (!client) {
        throw new Error(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      console.error(`Error getting client by ID (${id}):`, error);
      throw error;
    }
  }

  async getClientByEmail(email) {
    try {
      const client = await this.clientRepo.findByEmail(email);
      if (!client) {
        throw new Error(`Client with email ${email} not found`);
      }
      return client;
    } catch (error) {
      console.error(`Error getting client by email (${email}):`, error);
      throw error;
    }
  }

  async getClientByName(name) {
    try {
      const client = await this.clientRepo.findByName(name);
      if (!client) {
        throw new Error(`Client with name ${name} not found`);
      }
      return client;
    } catch (error) {
      console.error(`Error getting client by name (${name}):`, error);
      throw error;
    }
  }

  async createClient(clientData) {
    try {
      return await this.clientRepo.create(clientData);
    } catch (error) {
      console.error("Error creating client:", error);
      throw error;
    }
  }

  async updateClient(id, clientData) {
    try {
      const client = await this.clientRepo.update(id, clientData);
      if (!client) {
        throw new Error(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      console.error(`Error updating client (${id}):`, error);
      throw error;
    }
  }

  async deleteClient(id) {
    try {
      const success = await this.clientRepo.delete(id);
      if (!success) {
        throw new Error(`Client with ID ${id} not found`);
      }
      return success;
    } catch (error) {
      console.error(`Error deleting client (${id}):`, error);
      throw error;
    }
  }
}

export default ClientService;
