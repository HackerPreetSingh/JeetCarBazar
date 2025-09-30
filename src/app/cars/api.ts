import { getDocs, collection, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebaseConfig"
import { Car } from "@/Car";

export async function fetchCarsFromFirebase() {
  const response = await getDocs(collection(db, "cars"));
  // const cars = response.docs.map(doc => ({ id: doc.id, ...doc.data() as Omit<Car, 'id'> }));
  const cars: Car[] = response.docs.map(doc => {
    const data = doc.data() as Car;
    data.insuranceUpto = (data.insuranceUpto as Timestamp).toDate();
    console.log(data.images[0]);
    return data;
  });
  return cars;
}