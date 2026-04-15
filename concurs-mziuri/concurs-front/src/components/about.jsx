import { useState } from "react";
import { Link } from "react-router-dom";

export default function about() {
  return (
  <section className="border-y border-yellow-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              კონკურსის შესახებ
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              ეს პლატფორმა განკუთვნილია მოსწავლეებისთვის, რომლებსაც სურთ
              მათემატიკური უნარების, ლოგიკური აზროვნებისა და დამოუკიდებელი
              მუშაობის განვითარება. აქ შეგიძლია იხილო მიმდინარე ტური, გაეცნო
              წესებს, ნახო არქივი და მიიღო მონაწილეობა.
            </p>
          </div>
        </div>
      </section>
      );
}