import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Metrics from "../components/Metrics";
import { useRouter } from "next/router";
import { unixConvert } from "../utils/utils";

export default function Home({ weatherData }) {
  const router = useRouter();

  const [city, setCity] = useState("Hanoi");

  // Bắt sự kiện người dùng click enter
  const enterKeydown = (e) => {
    if (e.keyCode === 13) {
      router.push(`/?city=${city}`);
      // Reset input text
      setCity("");
    }
  };

  return weatherData && !weatherData.message ? (
    <div className="">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-row-1 md:grid-cols-3 bg-white opacity-95 shadow-md backdrop-blur-sm rounded-3xl m-10">
        {/* Left */}
        <div className="flex flex-col items-center  p-10">
          <h1 className="text-4xl font-bold mb-2">
            {weatherData.name}, {weatherData.sys.country}
          </h1>

          <p className="text-2xl mb-4">{weatherData.weather[0].description}</p>

          <Image
            alt="weatherIcon"
            src={`/icons/${weatherData.weather[0].icon}.svg`}
            width={300}
            height={300}
          />

          <h1 className="font-bold text-6xl mt-6">{weatherData.main.temp}°C</h1>
        </div>

        {/* Right */}
        <div className="col-span-2 bg-[#F7F7F7] p-10 rounded-tr-3xl rounded-br-3xl">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{unixConvert(weatherData.dt)}</h2>

            <input
              type="text"
              className="ml-20 rounded-xl p-2 outline-none"
              value={city}
              placeholder="Search a city..."
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                enterKeydown(e);
              }}
            />
          </div>

          <Metrics data={weatherData} />
        </div>
      </div>
    </div>
  ) : (
    <div className="">
      <h1>Loading data...</h1>
    </div>
  );
}

// Get data from API
export async function getServerSideProps(context) {
  const city = context.query.city || "hanoi";

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      weatherData,
    }, // will be passed to the page component as props
  };
}
