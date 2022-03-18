import { identification } from "./identification";

export class InitialPetition {
  id: number;
  legalCompetence:string;//court court
  docs: string[];//image, pdf, docs etc...
  causes: string; //Motivation
  identification: identification[];//all identification about envolved people.
}
