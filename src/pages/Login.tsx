import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { z } from "zod";
import { Link } from "react-router-dom";

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1500));
    alert("Login successful (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Login
        </h2>

        <Input
          label="Email"
          placeholder="Enter email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          showToggle
          {...register("password")}
          error={errors.password?.message}
        />
        <p className="text-sm text-right mb-3">
  <Link
    to="/forgot-password"
    className="text-blue-600 hover:underline"
  >
    Forgot password?
  </Link>
</p>


        <Button loading={isSubmitting}>
          Login
        </Button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
