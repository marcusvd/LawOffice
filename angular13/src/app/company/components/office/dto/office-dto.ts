import { AddressDto } from "../../address/dto/address-dto";
import { ContactDto } from "../../contact/dto/contact-dto";

export class OfficeDto {
  id: number;
  name: string;
  source: boolean;
  responsible:boolean;
  address:AddressDto;
  contacts: ContactDto;
}
