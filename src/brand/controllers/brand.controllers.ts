import { Request, Response } from "express";
import { BrandService } from "../services/brand.services"

export class BrandController {
  constructor(
    private readonly brandService: BrandService = new BrandService()
  ) {}
  async getBrands(req: Request, res: Response) {
    try {
      const data = await this.brandService.findAllBrands();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getBrandById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.brandService.findBrandById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createBrand(req: Request, res: Response) {
    try {
      const data = await this.brandService.createBrand(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateBrand(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.brandService.updateBrand(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteBrand(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.brandService.deleteBrand(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}