import { api } from "./api";

export async function searchLocation(value: string) {
  try {
    const response = await api(value).get('');

    return {
      temperature: response.data.main.temp,
      conditionText: response.data.weather[0].description,
      conditionId: response.data.weather[0].id,
      conditionIcon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      location: response.data.name,
      country: response.data.sys.country
    };
  } catch (error) {
    return null;
  }
}