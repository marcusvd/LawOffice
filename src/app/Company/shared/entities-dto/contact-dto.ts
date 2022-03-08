import { SocialNetworkDto } from './social-network-dto';

export class ContactDto {

     id:number;
     email:string;
     zap:string;
     cel:string;
     landline:string;
     site:string;
     socialNetworks: SocialNetworkDto[];

}
