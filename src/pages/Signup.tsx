import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schemas/authSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { z } from "zod";

type SignupFormData = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1500));
    alert("Signup successful (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Sign Up
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

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          showToggle
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button loading={isSubmitting}>
          Create Account
        </Button>
      </form>
    </div>
  );
}
