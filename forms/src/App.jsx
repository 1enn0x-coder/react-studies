import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(event);

    name != "" && email != "" && password != "" && onsubmit == true
      ? console.log(
          `name is ${name} , email is ${email} and password is ${password}`,
        )
      : console.log("input all information first");
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border border-gray-300 rounded-md bg-gray-100 mt-7"
      onSubmit={handleSubmit()}
    >
      <h1>Enter Your Information</h1>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter your name please..."
        className="border border-gray-300 rounded-md  p-2 bg-gray-200"
      />
      <input
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="enter your email please..."
        className="border border-gray-300 rounded-md  p-2 bg-gray-200"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="enter yor password please..."
        className="border border-gray-300 rounded-md  p-2 bg-gray-200"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
        Log in
      </button>
    </form>
  );
}
