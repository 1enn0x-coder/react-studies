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
  name: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  mobile: z.string().regex(/^\d{9}$/, "Mobile must be exactly 9 digits"),
  region: z.string().min(1, "Region is required"),
  nickname: z.string().min(2, "Nickname must be at least 2 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      region: "",
      nickname: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    alert("Form submitted successfully");
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f2c95a",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registration Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            {...register("name")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastname")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.lastname && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Mobile</label>
          <input
            type="text"
            placeholder="123456789"
            {...register("mobile")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.mobile && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Region</label>
          <select
            {...register("region")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="">აირჩიე რეგიონი</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          {errors.region && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.region.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Nickname</label>
          <input
            type="text"
            {...register("nickname")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.nickname && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.nickname.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
