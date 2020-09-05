const isProduction = process.env.NODE_ENV === "production";
export const base_url = isProduction
  ? "https://oblekco-runningtracker.herokuapp.com/api"
  : "http://localhost:3000/api";