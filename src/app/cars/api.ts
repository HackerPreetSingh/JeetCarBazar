import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebaseConfig"
import { Car } from "@/Car";

export async function fetchCarsFromFirebase() {
  const response = await getDocs(collection(db, "cars"));
  const cars = response.docs.map(doc => ({ id: doc.id, ...doc.data() as Omit<Car, 'id'> }));
  return cars;
}