import { Component, OnInit } from '@angular/core';
import { ContactDto } from 'src/app/Company/shared/entities-dto/contact-dto';
import { SocialNetworkDto } from 'src/app/Company/shared/entities-dto/social-network-dto';
import { ValidatorsGlobal } from 'src/app/Company/shared/helpers/validators-global';

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


  SocialNetAdd() {

    if (this._valueSocialNetName.length > 0 && this._valueSocialNetUrl.length > 0) {
      const socialNetwork: SocialNetworkDto = new SocialNetworkDto();
      socialNetwork.name = this._valueSocialNetName;
      socialNetwork.url = this._valueSocialNetUrl
      this._socialNets.push(socialNetwork);
      this._ValidationMsg._socialNetworks = this._socialNets;

    }

  }


  valueSocialNetName($event): string {
    const result = $event.target.value;
    this._valueSocialNetName = result
    return result
  }
  valueSocialNetUrl($event): string {
    const result = $event.target.value;
    this._valueSocialNetUrl = result
    return result
  }

  SocialNetRemover(i: number) {
    if (i != null) {
      this._ValidationMsg._socialNetworks.splice(i, 1);
      // console.log(i);
    }

  }





  // SocialNetRemoverScreen(): boolean {
  //   return this._ValidationMsg._socialNetworks.length ? true : false;
  // }



  // SocialNetUrl() {
  //   let name = document.querySelector('#socialnetName');
  //   //console.log(name.insertBefore);
  // }



  ngOnInit(): void {

//  this._ValidationMsg.contact();





  }

}
