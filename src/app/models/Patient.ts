//Enum in ts für die Werte gender von Patient --> male, female, other, unknown
export enum GenderEnum {
  "male",
  "female",
  "other",
  "unknown",
}
export class Patient {
  constructor(
    public id: string,
    public resourceType: string = "Patient",
    public identifier: Array<Identifier> = [],
    public name: Array<HumanName> = [],
    public telecom: Array<ContactPoint> = [],
    public active: boolean = false,
    public gender: GenderEnum= GenderEnum.unknown,
    public birthDate?: Date,
    public deceasedBoolean?: boolean,
    public deceasedDateTime?: Date,
    public multipleBirthBoolean?: boolean,
    public multipleBirthInteger?: number
  ) {}
}
export class Identifier {
  constructor(public system: string, public value: string) {}
}
export class HumanName {
  constructor(
    public id: string,
    public use: string,
    public text: string,
    public family: string,
    public prefix: string[]=new Array()
  ) {}
}
export class ContactPoint {
  constructor(public id: string, public system: string, public value: string) {}
}
