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

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "5px",
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      mail: "",
      phone_number: "",
      class_number: "",
      region: "",
      nickname: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

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
          <input type="text" {...register("name")} style={inputStyle} />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name</label>
          <input type="text" {...register("lastname")} style={inputStyle} />
          {errors.lastname && (
            <p style={errorStyle}>{errors.lastname.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input type="email" {...register("mail")} style={inputStyle} />
          {errors.mail && <p style={errorStyle}>{errors.mail.message}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="599123456"
            {...register("phone_number")}
            style={inputStyle}
          />
          {errors.phone_number && (
            <p style={errorStyle}>{errors.phone_number.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Class Number</label>
          <input
            type="number"
            {...register("class_number")}
            style={inputStyle}
          />
          {errors.class_number && (
            <p style={errorStyle}>{errors.class_number.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Region</label>
          <select {...register("region")} style={inputStyle}>
            <option value="">აირჩიე რეგიონი</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          {errors.region && <p style={errorStyle}>{errors.region.message}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Nickname</label>
          <input type="text" {...register("nickname")} style={inputStyle} />
          {errors.nickname && (
            <p style={errorStyle}>{errors.nickname.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input type="password" {...register("password")} style={inputStyle} />
          {errors.password && (
            <p style={errorStyle}>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
