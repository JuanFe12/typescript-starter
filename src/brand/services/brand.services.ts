import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/service.entities";
import { BrandDTO } from "../dto/brand.dto";
import { BrandEntity } from "../entities/brand.entities";

export class BrandService extends BaseService<BrandEntity> {
  constructor() {
    super(BrandEntity);
  }

  async findAllBrands(): Promise<BrandEntity[]> {
    return (await this.execRepository).find();
  }
  async findBrandById(id: string): Promise<BrandEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createBrand(body: BrandDTO): Promise<BrandEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteBrand(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateBrand(
    id: string,
    infoUpdate: BrandDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}