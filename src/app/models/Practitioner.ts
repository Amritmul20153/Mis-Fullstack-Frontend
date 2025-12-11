export class Practitioner {
  public static genderCode: Array<string> = ['male', 'female', 'other', 'unknown'];

  constructor(
    public id: string = '',
    public resourceType: string = 'Practitioner',
    public identifier: Identifier[] = [],
    public text?: Narrative,
    public active: boolean = false,
    public name: HumanName[] = [],
    public telecom: ContactPoint[] = [],
    public address: Address[] = [],
    public gender: string = 'unknown',
    public birthDate: Date = new Date(),
    public photo: Attachment[] = [],
    public qualification: Qualification[] = []
  ) {}
}

export class Identifier {
  constructor(public value: string = '') {}
}

export class HumanName {
  public static useCode: Array<string> = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'];

  constructor(
    public id: string = '',
    public use: string = '',
    public text: string = '',
    public family: string = ''
  ) {}
}

export class Narrative {
  constructor(
    public status: string = '',
    public div: string = ''
  ) {}
}

export class ContactPoint {
  constructor(public system?: string, public value?: string) {}
}

export class Address {
  constructor(public city?: string, public postalCode?: string, public line?: string[]) {}
}

export class Attachment {
  constructor(public url: string = '') {}
}

export class Qualification {
  constructor(public code: string = '', public issuer?: string) {}
}
