# TravelBuddy

TravelBuddy is a premium, modern web platform designed to help users explore and book their dream travel destinations. Built with a sleek, dark-themed glassmorphism aesthetic, it offers an intuitive and visually stunning user experience.

## Features

- **Dynamic UI/UX:** Responsive design with smooth animations, vibrant hover states, and a modern dark theme.
- **Destination Discovery:** Browse beautifully crafted cards featuring top global travel spots.
- **Booking System:** Integrated booking engine that allows users to select destinations, check-in dates, and the number of guests.
- **User Authentication:** Fully functional frontend-to-backend login and sign-up flows.
- **Interactive Elements:** Features like a testimonial carousel, newsletter subscription, and a working contact form.

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript
- **Backend:** Node.js, Express.js
- **Database:** Local JSON File Storage (`database.json`)

## 🚀 How to Run Locally

1. Clone this repository.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Install dependencies by running:
'```bash
   npm install
4.Start the application:
 '```bash
   npm start
5.Open your browser and navigate to `http://localhost:3000`.

## 🌐 API Endpoints

The built-in Express server handles all API logic locally on port `3000`:
-`POST /api/signup` - Register a new user
-`POST /api/login` - Authenticate a user
-`POST /api/bookings` - Create a new trip booking
-`POST /api/bookings/:id/cancel` - Cancel an existing booking
-`POST /api/newsletter` - Subscribe to the mailing list
-`POST /api/contact` - Submit a contact form message
