import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { IsDateStringValid } from 'src/validators/IsDateStringValid';

export interface Info {
  name: string;
  suraname: string;
  birthday: string;
  age: number;
  documentType: 'DNI' | 'CUIT';
  documentNumber: number;
}

export class InfoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase()),
  )
  name: string;
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase()),
  )
  suraname: string;
  @Validate(IsDateStringValid)
  birthday: string;
  @IsNumber()
  age: number;
  @IsEnum(['DNI', 'CUIT'])
  documentType: 'DNI' | 'CUIT';
  @IsNumber()
  documentNumber: number;
}
