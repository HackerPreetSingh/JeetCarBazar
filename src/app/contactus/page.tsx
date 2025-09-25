// export default function Contact() {
//   return (
//     <div className="w-full text-center">
//       <h2 className="text-4xl font-bold mb-8 text-blue-700">Contact Us</h2>
//       <p className="text-lg text-gray-800">Email: <span className="text-green-700">info@jeetcarbazar.com</span></p>
//       <p className="text-lg text-gray-800">Phone: <span className="text-green-700">+91-XXXXXXXXXX</span></p>
//     </div>
//   );
// }

import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-700">Contact Us</h2>
      <div className="flex justify-center gap-8 mb-6 text-3xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
          <FaInstagram />
        </a>
        <a href="tel:+91XXXXXXXXXX" className="text-green-700 hover:text-green-900">
          <FaPhone />
        </a>
        <a href="mailto:info@jeetcarbazar.com" className="text-yellow-600 hover:text-yellow-800">
          <FaEnvelope />
        </a>
      </div>
      {/* <p className="text-lg text-gray-800">
        Email: <span className="text-green-700">info@jeetcarbazar.com</span>
      </p>
      <p className="text-lg text-gray-800">
        Phone: <span className="text-green-700">+91-XXXXXXXXXX</span>
      </p> */}
    </div>
  );
}