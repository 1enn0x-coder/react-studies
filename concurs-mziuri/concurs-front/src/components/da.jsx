

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