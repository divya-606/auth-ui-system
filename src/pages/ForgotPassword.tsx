import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../schemas/authSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { z } from "zod";
import { Link } from "react-router-dom";

type ForgotFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotFormData) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1500));
    alert("Password reset link sent (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Forgot Password
        </h2>

        <Input
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Button loading={isSubmitting}>
          Send Reset Link
        </Button>

        <p className="text-sm text-center mt-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
}
