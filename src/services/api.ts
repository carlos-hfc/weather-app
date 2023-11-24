import axios from "axios";

export const api = (q: string) => axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.NEXT_PUBLIC_API_KEY,
    q,
    lang: "pt_br",
    units: "metric"
  }
});