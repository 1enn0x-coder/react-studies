import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AllProvisions() {
  const { id } = useParams();

  const [provision, setProvision] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/provisions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProvision(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="border border-yellow-300 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {provision?.header}
          </h1>

          <div className="mt-8 whitespace-pre-line text-base leading-8 text-black/80">
            {provision?.content}
          </div>
        </div>
      </section>
    </main>
  );
}
