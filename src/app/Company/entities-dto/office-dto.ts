import { AddressDto } from "src/app/company/shared/entities-dto/address-dto";
import { ContactDto } from "src/app/company/shared/entities-dto/contact-dto";

export class OfficeDto {

  id: number;
  name: string;
  source: boolean;
  responsible:boolean;
  address:AddressDto;
  contacts: ContactDto;



}
