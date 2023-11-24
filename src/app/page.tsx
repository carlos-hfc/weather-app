'use client';

import Image from "next/image";
import { KeyboardEvent, useState } from "react";

import { Input } from "@/components/Input";

import { searchLocation } from "@/services/fetches";
import { groupCondition } from "@/utils";

export default function Home() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState<WeatherResponse | null>(null);

  async function search(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const data = await searchLocation(location);

      setData(data);
    }
  }

  return (
    <main className={`flex flex-col justify-center items-center relative w-full h-screen ${groupCondition(data?.conditionId ?? 800)}`}>
      <div className="p-4 md:p-8 flex flex-col justify-center items-center w-full gap-4 md:gap-12">
        <div className="flex justify-center items-center w-full">
          <Input type="search" placeholder="Insira a sua localização"
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyDown={search}
          />
        </div>

        {data && (
          <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:gap-20">
            <div className="w-40 h-40 relative">
              <Image
                src={`https://openweathermap.org/img/wn/${data.conditionIcon}@2x.png`}
                alt={data.conditionText}
                fill
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center items-center text-white font-normal">
              <p className="font-extralight text-8xl">{data.temperature}ºC</p>

              <div className="flex flex-col items-center gap-6">
                <p className="text-base capitalize">
                  {data.conditionText}
                </p>

                <div className="flex gap-2 items-center">
                  <p className="text-2xl">
                    {data.location}, <strong className="font-medium">{data.country}</strong>
                  </p>

                  <Image
                    src={`https://flagsapi.com/${data.country}/flat/32.png`}
                    alt={data.country}
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center flex-wrap justify-center gap-2 md:gap-6">
                  <div className="flex gap-2">
                    <Image
                      className="condition-image"
                      src="/humidity.png"
                      width={52}
                      height={52}
                      alt="Humidade"
                      loading="lazy"
                    />

                    <div className="flex flex-col">
                      <p className="text-2xl">{data.humidity}%</p>
                      <p className="text-base">Humidade</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      className="condition-image"
                      src="/wind.png"
                      width={52}
                      height={52}
                      alt="Vento"
                      loading="lazy"
                    />

                    <div className="flex flex-col">
                      <p className="text-2xl">{data.wind} Km/h</p>
                      <p className="text-base">Velocidade do vento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
