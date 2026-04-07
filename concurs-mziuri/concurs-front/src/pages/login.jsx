import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  mail: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Login failed");
        return;
      }

      alert("User logged in successfully");
      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-yellow-400 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          ავტორიზაცია
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800">
              მეილი
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("mail")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.mail && (
              <p className="text-red-500 text-sm mt-1">{errors.mail.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              პაროლი
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
