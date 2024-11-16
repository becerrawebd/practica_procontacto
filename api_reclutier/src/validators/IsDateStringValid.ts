import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDateStringValid', async: false })
export class IsDateStringValid implements ValidatorConstraintInterface {
  validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    const regex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!regex.test(value)) {
      return false;
    }
    const dateToValidate = new Date(value);
    const lowerDate = new Date('1899/12/31');
    if (
      this.greaterThan(dateToValidate) ||
      !this.greaterThan(dateToValidate, lowerDate)
    ) {
      return false;
    }
    return true;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'El campo debe ser una fecha válida en formato YYYY/MM/DD y estar entre 1900/01/01 y la fecha actual.';
  }

  greaterThan(dateToValidate: Date, dateLimit: Date = new Date()): boolean {
    dateLimit.setHours(0, 0, 0, 0);
    return dateToValidate > dateLimit;
  }
}
