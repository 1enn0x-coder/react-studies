import { useState } from "react";
import { Link } from "react-router-dom";
import hopeTomorrow2014_1 from "../assets/1.jpg";
import hopeTomorrow2014_2 from "../assets/2.jpg";
import hopeTomorrow2014_3 from "../assets/3.jpg";
import hopeTomorrow2014_4 from "../assets/4.jpg";
import hopeTomorrow2014_5 from "../assets/5.jpg";

const archivePreview = [
  "2025–26 სასწავლო წლის ტურები",
  "2024–25 სასწავლო წლის ტურები",
];

const hopeTomorrowSlides = [
  {
    image: hopeTomorrow2014_1,
    title: "„იმედი ხვალის“",
    subtitle: "2014. დაჯილდოების ცერემონია",
    description:
      "მოსწავლე ახალგაზრდობის ეროვნული სასახლე. ინფორმატიკაში საქართველოს ეროვნული ნაკრების წევრები, მზიურელები - გიორგი სხირტლაძე, ნიკა სვანიძე, ელენე მაჩაიძე და ნიკა ნადირაძე, ამავე ნაკრების ხელმძღვანელ გოჩა მანდარიასთან ერთად დაჯილდოების ცერემონიაზე.",
    alt: "იმედი ხვალის 2014 დაჯილდოების ცერემონია",
  },
  {
    image: hopeTomorrow2014_2,
    title: "„იმედი ხვალის“",
    subtitle: "2014. დაჯილდოების ცერემონია",
    description:
      "„იმედი ხვალის“ – 2014. დაჯილდოების ცერემონია. მოსწავლე ახალგაზრდობის ეროვნული სასახლე. ინფორმატიკაში საქართველოს ეროვნული ნაკრების წევრები, მზიურელები - გიორგი სხირტლაძე, ნიკა სვანიძე და ელენე მაჩაიძე აჯილდოებენ კონკურსის ერთ-ერთ გამარჯვებულს.",
    alt: "იმედი ხვალის 2014 დაჯილდოების ცერემონია",
  },
  {
    image: hopeTomorrow2014_3,
    title: "„იმედი ხვალის“",
    subtitle: "2014. დაჯილდოების ცერემონია",
    description:
      "„იმედი ხვალის“ – 2014, დაჯილდოების ცერემონია. მოსწავლე ახალგაზრდობის ეროვნული სასახლე. თავისუფალი უნივერსიტეტის მათემატიკისა და კომპიუტერულ მეცნიერებათა სკოლის ხელმძღვანელი ამირან ამბროლაძე თავისი წიგნით აჯილდოებს კონკურსის ერთ-ერთ გამარჯვებულს.",
    alt: "იმედი ხვალის 2014 დაჯილდოების ცერემონია",
  },
  {
    image: hopeTomorrow2014_4,
    title: "„იმედი ხვალის“",
    subtitle: "2014. დაჯილდოების ცერემონია",
    description:
      "„იმედი ხვალის“ – 2014. დაჯილდოების ცერემონია. მოსწავლე ახალგაზრდობის ეროვნული სასახლე. კონკურსში მონაწილე მოსწავლეები, რომლებმაც დაიმსახურეს სიგელები და სხვადასხვა ხარისხის დიპლომები.",
    alt: "იმედი ხვალის 2014 დაჯილდოების ცერემონია",
  },
  {
    image: hopeTomorrow2014_5,
    title: "„იმედი ხვალის“",
    subtitle: "2014. დაჯილდოების ცერემონია",
    description:
      "„იმედი ხვალის“ – 2014. დაჯილდოების ცერემონია. მოსწავლე ახალგაზრდობის ეროვნული სასახლე. კონკურსში გამარჯვებული მოსწავლეები და მათი მშობლები დაჯილდოების ცერემონიაზე მოსწავლე ახალგაზრდობის ეროვნული სასახლეში.",
    alt: "იმედი ხვალის 2014 დაჯილდოების ცერემონია",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % hopeTomorrowSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? hopeTomorrowSlides.length - 1 : prev - 1,
    );
  };

  const currentSlide = hopeTomorrowSlides[activeSlide];

  return (
    <main className="bg-white text-black">
      {/* Hero */}
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

      {/* Prizes */}
      <section className="mx-auto max-w-7xl px-4 py-12  sm:px-6 lg:px-8">
        <div className="border border-yellow-300 p-6 sm:p-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            წარმატებული მონაწილეები ჯილდოვდებიან
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-black/75">
            <p>
              ინტერნეტშეჯიბრის მონაწილეებს ვიწვევთ კონკურსში "იმედი ხვალის",
              რომელიც ტარდება სასწავლო წლის ბოლოს.
            </p>

            <p>
              "იმედი ხვალის" კონკურსის მეორე ტურში გადასული ინტერნეტშეჯიბრის 3
              საუკეთესო შედეგის მქონე მონაწილე ჯილდოვდება სათანადო დიპლომებითა
              და ფასიანი საჩუქრებით.
            </p>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="border-y border-yellow-300 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">„იმედი ხვალის“</h2>
            <p className="mt-3 text-base leading-7 text-black/70">
              ფოტოები და ინფორმაცია კონკურსიდან.
            </p>
          </div>

          <article className="overflow-hidden border border-yellow-300 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-white">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className="h-64 w-full object-cover sm:h-80 lg:h-full"
                />
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">{currentSlide.title}</h3>

                  <p className="mt-3 text-lg font-semibold text-black/75">
                    {currentSlide.subtitle}
                  </p>

                  <p className="mt-5 text-base leading-7 text-black/70">
                    {currentSlide.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-yellow-300 pt-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {hopeTomorrowSlides.length > 1 ? (
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={prevSlide}
                          className="flex h-9 w-9 items-center justify-center border border-yellow-300 bg-white text-black"
                          aria-label="Previous slide"
                        >
                          ←
                        </button>

                        <div className="flex items-center gap-2">
                          {hopeTomorrowSlides.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setActiveSlide(index)}
                              className={`h-3 w-3 border border-yellow-400 ${
                                activeSlide === index
                                  ? "bg-yellow-400"
                                  : "bg-white"
                              }`}
                              aria-label={`Slide ${index + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={nextSlide}
                          className="flex h-9 w-9 items-center justify-center border border-yellow-300 bg-white text-black"
                          aria-label="Next slide"
                        >
                          →
                        </button>
                      </div>
                    ) : (
                      <div />
                    )}

                    <a
                      href="https://imedi.mziuri.ge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-yellow-500 bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-500"
                    >
                      საიტზე გადასვლა
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
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
