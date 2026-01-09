// Enum für Gender
export enum GenderEnum {
  male = "male",
  female = "female",
  other = "other",
  unknown = "unknown",
}

// Patient Klasse
export class Patient {
  constructor(
    public id: string,
    public resourceType: string = "Patient",
    public identifier: Array<Identifier> = [],
    public name: Array<HumanName> = [],
    public telecom: Array<ContactPoint> = [],
    public active: boolean = false,
    public gender: GenderEnum = GenderEnum.unknown,
    public birthDate?: Date,
    public deceasedBoolean?: boolean,
    public deceasedDateTime?: Date,
    public multipleBirthBoolean?: boolean,
    public multipleBirthInteger?: number
  ) {}
}

// Identifier Klasse
export class Identifier {
  constructor(
    public system: string,
    public value: string
  ) {}
}

// HumanName Klasse
export class HumanName {
  constructor(
    public id: string,
    public use: string,
    public text: string,
    public family: string,
    public prefix: string[] = []
  ) {}
}

// ContactPoint Klasse
export class ContactPoint {
  constructor(
    public id: string,
    public system: string,
    public value: string
  ) {}
}
