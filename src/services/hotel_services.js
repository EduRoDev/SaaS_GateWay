import HotelRepo from "../Repos/hotel_repo.js";

class HotelServices {
  constructor() {
    this.repo = new HotelRepo();
  }

  async findAll() {
    return await this.repo.findAll();
  }

  async findById(id) {
    return await this.repo.findById(id);
  }

  async findByName(name) {
    return await this.repo.findByName(name);
  }

  async create(hotel) {
    return await this.repo.create(hotel);
  }

  async update(id, hotelData) {
    return await this.repo.update(id, hotelData);
  }

  async delete(id) {
    return await this.repo.delete(id);
  }
}

export default HotelServices;
