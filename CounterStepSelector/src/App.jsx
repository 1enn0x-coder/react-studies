import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-5xl font-bold text-slate-800">
          {count}
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">Counter app</p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={() => setCount((prev) => prev - step)}
            className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-lg font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            -
          </button>

          <button
            onClick={() => setCount((prev) => prev + step)}
            className="flex-1 rounded-xl bg-green-500 px-4 py-3 text-lg font-semibold text-white transition hover:bg-green-600 active:scale-95"
          >
            +
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-4 w-full rounded-xl bg-slate-800 px-4 py-3 font-medium text-white transition hover:bg-slate-900 active:scale-95"
        >
          Reset
        </button>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Step
          </label>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
    </div>
  );
}
