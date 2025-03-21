import RoomRepo from "../Repos/room_repo.js";

class RoomServices {
    constructor(){
        this.roomRepo = new RoomRepo();
    }

    async findAll(){
        return await this.roomRepo.findAll();
    }

    async findById(id){
        return await this.roomRepo.findById(id);
    }

    async findByName(name){
        return await this.roomRepo.findByName(name);
    }

    async findByPrice(price){
        return await this.roomRepo.findByPrice(price);
    }

    async findByType(type){
        return await this.roomRepo.findByType(type);
    }

    async findByCapacity(capacity){
        return await this.roomRepo.findByCapacity(capacity);
    }

    async findByAvailable(available){
        return await this.roomRepo.findByAvailable(available);
    }

    async create(room){
        return await this.roomRepo.create(room);
    }

    async update(id, roomData){
        return await this.roomRepo.update(id, roomData);
    }

    async delete(id){
        return await this.roomRepo.delete(id);
    }
}

export default RoomServices;