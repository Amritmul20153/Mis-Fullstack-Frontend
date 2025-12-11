export enum MedicationStatus {
  active = "active",
  inactive = "inactive",
  entered_in_error = "entered-in-error"
}

export interface Coding {
  system?: string;
  code?: string;
  display?: string;
}

export interface CodeableConcept {
  coding?: Coding[];
  text?: string;
}

export interface Quantity {
  value?: number;
  system?: string;
  unit?: string;
  code?: string;
}

export interface Ratio {
  numerator?: Quantity;
  denominator?: Quantity;
}

export interface Batch {
  lotNumber?: string;
  expirationDate?: string;
}

export interface Ingredient {
  id?: string;
  itemCodeableConcept?: CodeableConcept;
  isActive?: boolean;
  strength?: Ratio;
}

export interface Medication {
  id?: string;
  status: MedicationStatus | string;
  form?: CodeableConcept;
  batch?: Batch;
  ingredient: Ingredient[];
}