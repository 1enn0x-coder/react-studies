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

      <Prevtours />

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
