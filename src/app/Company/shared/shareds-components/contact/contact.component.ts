import { Component, OnInit } from '@angular/core';
import { ContactDto } from 'src/app/company/shared/entities-dto/contact-dto';
import { SocialNetworkDto } from 'src/app/company/shared/entities-dto/social-network-dto';
import { ValidatorsGlobal } from 'src/app/company/shared/helpers/validators-global';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public _contact: ContactDto = new ContactDto();
  public _valueSocialNetName: string = '';
  public _valueSocialNetUrl: string = '';
  private _socialNets: SocialNetworkDto[] = [];
  constructor(
    public _ValidationMsg: ValidatorsGlobal
  ) {  }


  ngOnInit(): void {

  this._ValidationMsg.contact();
  this._ValidationMsg.socialnetWorks();





  }

}
