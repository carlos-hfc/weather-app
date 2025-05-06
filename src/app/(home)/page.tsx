import Image from "next/image"

import { groupCondition } from "@/utils"

import { getWeather } from "./actions"
import { Form } from "./form"

interface Props {
  searchParams: {
    q: string
  }
}

export default async function Home({ searchParams }: Props) {
  const data = await getWeather({ q: searchParams.q })

  return (
    <main
      className={`flex flex-col justify-center items-center relative w-full h-screen ${groupCondition(data.response?.conditionId) ?? "bg-clear"}`}
    >
      <div className="p-4 md:p-8 flex flex-col justify-center items-center w-full gap-4 md:gap-12">
        <Form />

        {data.error && (
          <div className="flex text-white font-medium text-2xl">
            Cidade não encontrada!!
          </div>
        )}

        {!data.error && data.response && (
          <div className="flex flex-col justify-center items-center gap-6 md:gap-10">
            <div className="flex flex-col justify-center items-center text-white font-normal">
              <p className="font-extralight text-8xl">
                {data?.response?.temperature.toFixed(0)}ºC
              </p>

              <div className="flex flex-col items-center gap-6">
                <div className="relative text-center">
                  <Image
                    src={`https://openweathermap.org/img/wn/${data?.response?.conditionIcon}@2x.png`}
                    alt={data?.response?.conditionText}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <p className="capitalize">{data?.response?.conditionText}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <p className="text-2xl">
                    {data.response.location},{" "}
                    <strong className="font-medium">
                      {data.response.country}
                    </strong>
                  </p>

                  <Image
                    src={`https://flagsapi.com/${data.response.country}/flat/32.png`}
                    alt={data.response.country}
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center flex-wrap justify-center gap-2 md:gap-6">
                  <div className="flex gap-2">
                    <Image
                      className="object-contain drop-shadow-image"
                      src="/humidity.png"
                      width={52}
                      height={52}
                      alt="Humidade"
                      loading="lazy"
                    />

                    <div>
                      <p className="text-2xl">{data.response.humidity}%</p>
                      <p>Humidade</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      className="object-contain drop-shadow-image"
                      src="/wind.png"
                      width={52}
                      height={52}
                      alt="Vento"
                      loading="lazy"
                    />

                    <div>
                      <p className="text-2xl">{data.response.wind} km/h</p>
                      <p>Velocidade do vento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
