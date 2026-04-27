import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import Hero from "../components/hero";
import Prizes from "../components/prizes";
import About from "../components/about";
import Prevtours from "../components/prevTours";

const archivePreview = [
  "2025–26 სასწავლო წლის ტურები",
  "2024–25 სასწავლო წლის ტურები",
];

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />

      <Prizes />

      <Carousel />

      <About />

      {/* Archive preview */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">გავლილი ტურები</h2>
            <p className="mt-2 text-black/70">
              არქივი მოსამზადებლად და შედეგების სანახავად
            </p>
          </div>

          <Link
            to="/past-tours"
            className="inline-flex w-fit items-center justify-center border border-yellow-300 bg-white px-5 py-3 font-semibold text-black"
          >
            ყველა ტურის ნახვა
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {archivePreview.map((item) => (
            <div key={item} className="border border-yellow-300 bg-white p-5">
              <p className="text-lg font-semibold">{item}</p>
              <p className="mt-2 text-sm text-black/65">
                ამოცანები, შედეგები და არქივის მასალები
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border border-yellow-500 bg-yellow-400 px-6 py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                მზად ხარ მონაწილეობის მისაღებად?
              </h2>
              <p className="mt-3 text-black/75">
                გაიარე რეგისტრაცია და ჩაერთე მიმდინარე ტურში.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center border border-black bg-black px-6 py-3 font-semibold text-yellow-300"
              >
                რეგისტრაცია
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center border border-black bg-yellow-400 px-6 py-3 font-semibold text-black"
              >
                ავტორიზაცია
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
