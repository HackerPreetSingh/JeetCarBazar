import { Timestamp } from "firebase/firestore";

export class Car {
  name!: string;
  model!: string;
  year!: number;
  owner!: string;
  mileage!: number;
  average!: string;
  demandPrice!: string;
  finalPrice!: string;
  regNo!: string;
  insuranceUpto!: Timestamp | Date;
  fuelVersion!: string;
  transmission!: string;
  description!: string[];
  images!: string[];
}