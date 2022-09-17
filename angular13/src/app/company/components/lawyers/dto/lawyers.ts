import { AddressDto } from "../../address/dto/address-dto";
import { ContactDto } from "../../contact/dto/contact-dto";

export class lawyers {
  id: number;
  name:string;
  address:AddressDto;
  contacts:ContactDto;
  oab:number;
}
