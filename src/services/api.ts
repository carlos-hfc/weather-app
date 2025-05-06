// import axios from "axios"

// export const api = (q: string) =>
//   axios.create({
//     baseURL: "https://api.openweathermap.org/data/2.5/weather",
//     params: {
//       appid: process.env.NEXT_PUBLIC_API_KEY,
//       q,
//       lang: "pt_br",
//       units: "metric",
//     },
//   })

export function api(q: string) {
  const params = new URLSearchParams()
  params.set("q", q)
  params.set("appid", String(process.env.NEXT_PUBLIC_API_KEY))
  params.set("lang", "pt_br")
  params.set("units", "metric")

  const url = new URL(
    `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`,
  )

  return fetch(url)
}
