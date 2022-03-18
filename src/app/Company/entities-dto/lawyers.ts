import { AddressDto } from "../shared/entities-dto/address-dto";
import { ContactDto } from "../shared/entities-dto/contact-dto";

export class lawyers {
  id: number;
  name:string;
  address:AddressDto;
  contacts:ContactDto;
  oab:number;
}
