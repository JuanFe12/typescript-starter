
import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class BrandDTO extends BaseDTO {
  @IsNotEmpty()
  brand_name!: string;
}