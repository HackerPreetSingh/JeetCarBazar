# Jeet Car Bazar

A modern, responsive web application for buying and selling used cars on commission basis.

## Features

- **Sticky Navbar:** Always visible at the top, with smooth scroll navigation to sections.
- **Home Section:** Video background showcasing the brand.
- **About Us Section:** Auto-swiping oval image carousel on the left, company info on the right.
- **Cars Section:** Paginated car listings with auto-swiping image carousel and detailed info tiles.
- **Contact Us Section:** Contact details with social media and communication icons.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Custom Indian Number Formatting:** Car prices displayed in Indian comma style.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper.js](https://swiperjs.com/) (for carousels)
- [React Icons](https://react-icons.github.io/react-icons/) (for social/contact icons)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/jeet-car-bazar.git
   cd jeet-car-bazar
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

```
src/
  app/
    home/
      page.tsx
    aboutus/
      page.tsx
    cars/
      page.tsx
    contactus/
      page.tsx
    navbar/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  data/
    cars.json
    aboutusText.json
public/
  cars/
    car1.jpg
    car2.jpg
    car3.jpg
  about/
    IMG_0853.HEIC
    IMG_0966.HEIC
    IMG_1146.HEIC
  car_running.mp4
```

## Customization

- **Add/Remove Cars:** Edit `src/data/cars.json`.
- **Change About Us Text:** Edit `src/data/aboutusText.ts`.
- **Update Images:** Place new images in `public/cars/` or `public/about/` and update the arrays in the respective components.

MIT

---

**Made with ❤️ by Hempreet Singh**