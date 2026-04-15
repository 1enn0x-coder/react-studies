import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
<section className="border-b border-yellow-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                მზიურის მათემატიკური
                <span className="block text-yellow-800">ინტერნეტ შეჯიბრი</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-black/70">
                მათემატიკური ამოცანები, ლოგიკური აზროვნება და კონკურსში
                მონაწილეობის შესაძლებლობა ერთ სივრცეში.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/current-tours"
                  className="inline-flex items-center justify-center border border-yellow-500 bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500"
                >
                  მიმდინარე ტური
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center border border-yellow-300 bg-white px-6 py-3 font-semibold text-black"
                >
                  რეგისტრაცია
                </Link>
              </div>
            </div>

            <div className="border border-yellow-300 bg-yellow-50 p-5">
              <div className="mt-4 space-y-3">
                <div className="border border-yellow-300 bg-white p-4">
                  <p className="text-sm text-black/60">მიმდინარე ტური</p>
                  <p className="mt-1 text-2xl font-bold">VII ტური</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-yellow-300 bg-white p-4">
                    <p className="text-sm text-black/60">ბოლო ვადა</p>
                    <p className="mt-1 font-semibold">24 აპრილი</p>
                  </div>

                  <div className="border border-yellow-300 bg-white p-4">
                    <p className="text-sm text-black/60">კლასები</p>
                    <p className="mt-1 font-semibold">III–VI</p>
                  </div>
                </div>

                <div className="border border-yellow-300 bg-white p-4">
                  <p className="text-sm text-black/60">მონაწილეობა</p>
                  <p className="mt-1 font-semibold">ონლაინ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
}