// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import Image from 'next/image';
// import aboutusText from '@/data/aboutusText';

// const aboutImages = [
//   "IMG_0853.HEIC",
//   "IMG_0966.HEIC",
//   "IMG_1146.HEIC"
// ];

// export default function AboutUsPage() {
//   return (
//     <div className="w-full">
//       <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[60vh]">
//         <div className="flex items-center justify-center h-full">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             loop={true}
//             className="w-96 h-[28rem]"
//           >
//             {aboutImages.map((img, idx) => (
//               <SwiperSlide key={idx}>
//                 <Image
//                   src={`/about/${img}`}
//                   alt={`About Us ${idx + 1}`}
//                   width={384}
//                   height={448}
//                   className="object-cover w-96 h-[28rem] rounded-[50%]"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="p-8 flex flex-col justify-center h-full">
//           <p className="text-lg">{aboutusText}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import aboutusText from '@/data/aboutusText.json';

const aboutImages = [
  "IMG_0853.HEIC",
  "IMG_0966.HEIC",
  "IMG_1146.HEIC"
];

export default function AboutUsPage() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[60vh]">
        <div className="flex items-center justify-center h-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-full max-w-lg h-[28rem]"
          >
            {aboutImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={`/about/${img}`}
                  alt={`About Us ${idx + 1}`}
                  width={384}
                  height={448}
                  className="object-cover w-96 h-[28rem] rounded-[50%]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="p-8 flex flex-col justify-center h-full">
          <p className="text-lg text-gray-800">{aboutusText.text}</p>
        </div>
      </div>
    </div>
  );
}