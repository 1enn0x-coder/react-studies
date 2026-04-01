import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  mail: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
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
      const response = await fetch("http://localhost:5000/login", {
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input type="email" {...register("mail")} style={inputStyle} />
          {errors.mail && <p style={errorStyle}>{errors.mail.message}</p>}
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
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
