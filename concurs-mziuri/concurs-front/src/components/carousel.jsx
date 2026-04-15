import { useState } from "react";
import hopeTomorrow2014_1 from "../assets/1.jpg";
import hopeTomorrow2014_2 from "../assets/2.jpg";
import hopeTomorrow2014_3 from "../assets/3.jpg";
import hopeTomorrow2014_4 from "../assets/4.jpg";
import hopeTomorrow2014_5 from "../assets/5.jpg";

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

export default function carousel() {
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
    <>
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

    </>   
  );
}