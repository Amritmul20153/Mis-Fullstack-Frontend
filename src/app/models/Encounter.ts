export class Encounter {
  public static statusCode: Array<string> = [
    'planned',
    'in-progress',
    'on-hold',
    'discharged',
    'completed',
    'cancelled',
    'discontinued',
    'entered-in-error',
    'unknown'
  ];

  constructor(
    public id: string = '',
    public resourceType: string = 'Encounter',
    public identifier: Identifier[] = [],
    public encounterStatus: string = 'planned',
    public plannedStartDate: Date = new Date(),
    public plannedEndDate: Date = new Date(),
    public priority: CodeableConcept = new CodeableConcept(),
    public serviceProvider: Reference = new Reference()
  ) {}
}

export class Identifier {
  constructor(public value: string = '') {}
}

export class CodeableConcept {
  constructor(public text: string = '') {}
}

export class Reference {
  constructor(public reference: string = '', public display: string = '') {}
}
