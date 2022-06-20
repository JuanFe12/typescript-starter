import { BaseRouter } from "../shared/routes/router";
import { BrandController } from "./controllers/brand.controllers"
export class BrandRouter extends BaseRouter<BrandController> {
  constructor() {
    super(BrandController);
  }

  routes(): void {
    this.router.get("/brands", (req, res) =>
      this.controller.getBrands(req, res)
    );
    this.router.get("/brand/:id", (req, res) =>
      this.controller.getBrandById(req, res)
    );
    this.router.post("/createBrand", (req, res) =>
      this.controller.createBrand(req, res)
    );
    this.router.put("/updateBrand/:id", (req, res) =>
      this.controller.updateBrand(req, res)
    );
    this.router.delete("/deleteBrand/:id", (req, res) =>
      this.controller.deleteBrand(req, res)
    );
  }
}