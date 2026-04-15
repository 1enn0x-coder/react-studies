import { Link } from "react-router-dom";

export default function prevtours() {
  return (

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

      
      
      );
}