import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const regions = [
  "თბილისი",
  "კახეთი",
  "იმერეთი",
  "გურია",
  "აჭარა",
  "ქვემო ქართლი",
  "მცხეთა-მთიანეთი",
  "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
  "სამცხე-ჯავახეთი",
  "შიდა ქართლი",
  "სამეგრელო-ზემო სვანეთი",
  "აფხაზეთი",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  lastname: z.string().trim().min(1, "Last name is required"),
  mail: z.string().email("Invalid email address"),
  phone_number: z
    .string()
    .regex(/^\d{9}$/, "Phone number must be exactly 9 digits"),
  class_number: z.coerce
    .number()
    .int("Class number must be a whole number")
    .positive("Class number must be positive"),
  region: z.string().min(1, "Region is required"),
  nickname: z.string().trim().min(3, "Nickname must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        alert(result.message || "Registration failed");
        return;
      }

      alert("Student added successfully");
      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-yellow-400 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          რეგისტრაცია
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">სახელი</label>
            <input
              type="text"
              {...register("name")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">გვარი</label>
            <input
              type="text"
              {...register("lastname")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastname.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">მეილი</label>
            <input
              type="email"
              {...register("mail")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.mail && (
              <p className="text-red-500 text-sm mt-1">{errors.mail.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              ტელეფონის ნომერი
            </label>
            <input
              type="text"
              placeholder="599123456"
              {...register("phone_number")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">კლასი</label>
            <input
              type="number"
              {...register("class_number")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.class_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.class_number.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">რეგიონი</label>
            <select
              {...register("region")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">აირჩიე რეგიონი</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-red-500 text-sm mt-1">
                {errors.region.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">ზედმეტსახელი</label>
            <input
              type="text"
              {...register("nickname")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
            />
            {errors.nickname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nickname.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">პაროლი</label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-yellow-400"
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
            className="w-full bg-blue-500 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
