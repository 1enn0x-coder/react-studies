import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    name: false,
    lastname: false,
    age: false,
    email: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({
      name: false,
      lastname: false,
      age: false,
      email: false,
    });
    if (name.length < 4) {
      setError((prev) => ({ ...prev, name: true }));
    }

    if (lastname.length < 6) {
      setError((prev) => ({ ...prev, lastname: true }));
    }

    if (age < 18) {
      setError((prev) => ({ ...prev, age: true }));
    }

    if (!email.includes("@")) {
      setError((prev) => ({ ...prev, email: true }));
    }

    if (!error.name && !error.lastname && !error.age && !error.email) {
      console.log({ name, lastname, age, email });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form
          className="flex flex-col gap-4 max-w-md w-full p-4 border border-gray-700 rounded-md bg-black"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center text-white">
            Please fill out the form
          </h1>

          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="enter your name please..."
            className="border border-gray-700 rounded-md p-2 bg-gray-900 text-white placeholder-gray-400"
          />

          <p className="text-red-500">
            {error.name && "Name must be at least 4 characters long."}
          </p>

          <input
            type="text"
            name="lastname"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="enter your last name please..."
            className="border border-gray-700 rounded-md p-2 bg-gray-900 text-white placeholder-gray-400"
          />

          <p className="text-red-500">
            {error.lastname && "Last name must be at least 6 characters long."}
          </p>

          <input
            type="number"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="enter your age please..."
            className="border border-gray-700 rounded-md p-2 bg-gray-900 text-white placeholder-gray-400"
          />

          <p className="text-red-500">
            {error.age && "You must be at least 18 years old."}
          </p>

          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="enter your email please..."
            className="border border-gray-700 rounded-md p-2 bg-gray-900 text-white placeholder-gray-400"
          />

          <p className="text-red-500">
            {error.email && "Email must include '@' symbol."}
          </p>

          <button
            type="submit"
            className="bg-gray-800 text-white rounded-md p-2 hover:bg-gray-700"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
