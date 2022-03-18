import { AddressDto } from "../shared/entities-dto/address-dto";

export class identification {
  id: number;
  pronoun:string;
  names: string;//name
  parentage: string;//filiation name mother and father
  author: boolean;//if true, then is a author.
  maritialStatus: string;
  commonLawMarriage: boolean;//stable relationShip
  occupation:string //professional
  address: AddressDto;
  cpf: string;
  cnpj: string;
}
