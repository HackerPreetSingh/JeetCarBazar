// Update the import path if Navbar is located elsewhere, for example:
import { Typewriter } from "nextjs-simple-typewriter/dist/components/Typewriter";
import AboutUsPage from "../aboutus/page";
import Cars from "../cars/page";
import Contact from "../contactus/page";
import Navbar from "../navbar/page";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Home */}
      <section id="home" className="h-screen relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/car_running.mp4"
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <h1 className="text-white text-5xl font-bold">
            <Typewriter
            words={["जीत कार बाज़ार में आपका स्वागत है",
              "WELCOME TO JEET CAR BAZAR", 
              "हम कमीशन के आधार पर पुरानी कारों की बिक्री और खरीद का काम करते हैं",
              "We deal in sale and purchase of used cars on commission basis", 
              "वित्त सुविधा भी उपलब्ध है",
              "Finance facility is also available" 
              ]
            }
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h1>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="p-10 flex items-center justify-center bg-gray-100">
        {/* min-h-screen  */}
        <AboutUsPage />
      </section>

      {/* Cars */}
      <section id="cars" className="bg-white p-10">
        <Cars />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-200 p-10">
        <Contact />
      </section>
    </div>
  );
}