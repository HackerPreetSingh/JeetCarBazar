"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebaseConfig"
import { Car } from "@/Car";
import { CldImage } from "next-cloudinary";


async function fetchCarsFromFirebase() {
  const response = await getDocs(collection(db, "cars"));
  const cars = response.docs.map(doc => ({ id: doc.id, ...doc.data() as Omit<Car, 'id'> }));
  return cars;
}

function formatIndianNumber(x: string) {
  const lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  return otherNumbers !== ""
    ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
    : lastThree;
}

export default function Cars() {
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function loadCars() {
      const carsData = await fetchCarsFromFirebase();
      setCars(carsData);
    }
    loadCars();
  }, []);

  const totalPages = Math.ceil(cars.length / pageSize);
  const paginatedCars = cars.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {paginatedCars.map((car) => (
          <div key={car.id} className="border rounded shadow p-4 bg-white">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-40"
            >
              {car.images.map((img: string, idx: number) => (
                <SwiperSlide key={idx}>
                  {/* <Image
                    src={`/cars/${img}`}
                    alt={`${car.name} image ${idx + 1}`}
                    className="w-full h-40 object-cover mb-2 rounded"
                    width={400}
                    height={200}
                  /> */}
                  <CldImage
                    src={img}
                    alt={`${car.name} image ${idx + 1}`}
                    className="w-full h-40 object-cover mb-2 rounded"
                    width={400}
                    height={200}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="font-bold text-lg text-green-700 mt-2">{car.name}</h3>
            <p className="text-sm text-gray-700">{car.model ?? ""} | {car.year ?? ""}</p>
            <p className="text-sm text-gray-700">Owner: {car.owner ?? ""}</p>
            <p className="text-sm text-gray-700">Mileage: {car.mileage ?? ""} km</p>
            <p className="text-sm text-gray-700">Average: {car.average ?? ""}</p>
            <p className="text-lg font-semibold mt-2 text-red-700">
              ₹{car.price ? formatIndianNumber(car.price) : "N/A"}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center my-8 text-blue-700">
        <label>
          Cars per page:{" "}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="border rounded px-2 py-1"
          >
            {[8, 12, 16].map(count => (
              <option key={count} value={count}>{count}</option>
            ))}
          </select>
        </label>
        <div>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 mr-2 border rounded disabled:opacity-50 bg-blue-100"
          >
            Previous
          </button>
          <span className="font-semibold text-blue-700">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 ml-2 border rounded disabled:opacity-50 bg-blue-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}