"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { PrayerTimes, CalculationMethod, Coordinates } from "adhan";

moment.locale("id");

interface PrayerTimesState {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const cityCoordinates: Record<string, { lat: number; lon: number }> = {
  Jakarta: { lat: -6.2088, lon: 106.8456 },
  Bandung: { lat: -6.9175, lon: 107.6191 },
  Surabaya: { lat: -7.2575, lon: 112.7521 },
  Yogyakarta: { lat: -7.7972, lon: 110.3688 },
  Medan: { lat: 3.5952, lon: 98.6722 },
  Makassar: { lat: -5.1477, lon: 119.4327 },
};

export default function PrayerSchedule() {
  const [city, setCity] = useState("Jakarta");
  const [prayerTimes, setPrayerTimes] = useState<Partial<PrayerTimesState>>({});
  const [now, setNow] = useState(moment());
  const [todayHijri, setTodayHijri] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment());
      setTodayHijri(moment().format("D MMMM YYYY"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const { lat, lon } = cityCoordinates[city];
    const coordinates = new Coordinates(lat, lon);
    const params = CalculationMethod.MuslimWorldLeague();
    params.adjustments = {
      fajr: 2,
      sunrise: 0,
      dhuhr: 2,
      asr: 2,
      maghrib: 2,
      isha: 2,
    };
    const times = new PrayerTimes(coordinates, new Date(), params);

    setPrayerTimes({
      fajr: moment(times.fajr).format("HH:mm"),
      sunrise: moment(times.sunrise).format("HH:mm"),
      dhuhr: moment(times.dhuhr).format("HH:mm"),
      asr: moment(times.asr).format("HH:mm"),
      maghrib: moment(times.maghrib).format("HH:mm"),
      isha: moment(times.isha).format("HH:mm"),
    });
  }, [city]);

  const prayerOrder = [
    { key: "fajr", label: "Subuh" },
    { key: "sunrise", label: "Duha" },
    { key: "dhuhr", label: "Dzuhur" },
    { key: "asr", label: "Ashar" },
    { key: "maghrib", label: "Maghrib" },
    { key: "isha", label: "Isya" },
  ];

  const isNowInPrayerTime = (key: string) => {
    if (!prayerTimes[key as keyof PrayerTimesState]) return false;
    const current = now.format("HH:mm");
    const currentMinutes =
      parseInt(current.split(":")[0]) * 60 + parseInt(current.split(":")[1]);
    const prayerTime = prayerTimes[key as keyof PrayerTimesState];
    if (!prayerTime) return false;
    const prayerMinutes =
      parseInt(prayerTime.split(":")[0]) * 60 +
      parseInt(prayerTime.split(":")[1]);
    return Math.abs(currentMinutes - prayerMinutes) <= 15;
  };

  return (
    <div
      className="
        flex flex-col lg:flex-row items-center justify-between 
        w-full max-w-5xl mx-auto mt-10 p-6 rounded-2xl
        bg-cover bg-center text-white shadow-lg
      "
      style={{
        backgroundImage: "url('/bg-solat.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Kiri: Waktu & Lokasi */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
        <div className="text-3xl font-bold text-[var(--secondary)]">
          {now.format("HH:mm:ss")}
        </div>
        <div className="text-lg">{now.format("dddd, D MMMM YYYY")}</div>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-2 border border-white/40 bg-white/90 text-gray-800 rounded-lg px-3 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          {Object.keys(cityCoordinates).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Kanan: Jadwal Sholat */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 lg:mt-0 lg:ml-6">
        {prayerOrder.map((p) => (
          <div
            key={p.key}
            className={`flex flex-col items-center justify-center w-[110px] p-3 rounded-xl text-center transition-all
              ${
                isNowInPrayerTime(p.key)
                  ? "bg-red-700/80 text-white scale-105 shadow-lg"
                  : "bg-white/20 text-gray-100 border border-white/30"
              }`}
          >
            <div className="text-base font-medium">{p.label}</div>
            <div className="text-xl font-semibold">
              {prayerTimes[p.key as keyof PrayerTimesState]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
