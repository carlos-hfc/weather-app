import Image from "next/image";

import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative w-full h-screen">
      <div className="p-4 md:p-8 flex flex-col justify-center items-center w-full gap-4 md:gap-12">
        <div className="flex justify-center items-center w-full">
          <Input type="search" />
        </div>

        <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:gap-20">
          <div className="w-40 h-40 relative md:w-80 md:h-80">
            <Image
              src="/next.svg"
              alt=""
              fill
            />
          </div>

          <div className="flex flex-col justify-center items-center text-white font-normal">
            <p className="font-extralight text-8xl">15ºC</p>

            <div className="flex flex-col items-center gap-6">
              <p className="text-base">
                Clear
              </p>

              <p className="text-2xl">
                Pristina, XK
              </p>

              <div className="flex items-center justify-center gap-2 md:gap-6">
                <div className="flex gap-2">
                  <Image
                    className="condition-image"
                    src="/humidity.png"
                    width={52}
                    height={52}
                    alt="Humidade"
                  />

                  <div className="flex flex-col">
                    <p className="text-2xl">68%</p>
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
                  />

                  <div className="flex flex-col">
                    <p className="text-2xl">2 Km/h</p>
                    <p className="text-base">Velocidade do vento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
