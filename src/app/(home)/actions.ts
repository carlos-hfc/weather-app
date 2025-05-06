"use server"

import { api } from "@/services/api"
import { groupCondition } from "@/utils"

interface GetWeatherRequest {
  q: string
}

interface GetWeatherResponse {
  error: boolean
  response: WeatherResponse | null
}

export async function getWeather({
  q,
}: GetWeatherRequest): Promise<GetWeatherResponse> {
  if (!q) {
    return {
      error: false,
      response: null,
    }
  }

  const response = await api(q)

  const json = await response.json()

  if (json.cod !== 200) {
    return {
      error: true,
      response: null,
    }
  }

  return {
    error: false,
    response: {
      temperature: json.main.temp,
      conditionText: json.weather[0].description,
      conditionId: json.weather[0].id,
      conditionIcon: json.weather[0].icon,
      wind: json.wind.speed,
      humidity: json.main.humidity,
      location: json.name,
      country: json.sys.country,
      condition: groupCondition(json.weather[0].id),
    },
  }
}
