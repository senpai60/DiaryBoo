const allowedOrigins = [
  "http://localhost:5173",      // React local dev
  "http://localhost:3000",      // Node backend local
  "https://your-production-frontend.com",  // Replace with real prod domains!
  "https://www.your-production-frontend.com"
];

export const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true, // so cookies work cross-origin
  optionsSuccessStatus: 200 // legacy browser support
};
