import { SocialNetworkDto } from 'src/app/company/shared/entities-dto/social-network-dto';

export class ContactDto {

     id:number;
     email:string;
     zap:string;
     cel:string;
     landline:string;
     site:string;
     socialNetworks: SocialNetworkDto[];

}
