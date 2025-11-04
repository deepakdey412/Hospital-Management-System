import {
  PasswordInput,
  TextInput,
  Button,
  SegmentedControl,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      type: "PATIENT",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",

      password: (value: string) => (!value ? "Password is required" : null),

      confirmPassword: (value: string, values: { password: string }) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Faded background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT")',
          filter: "brightness(60%)", // only fade image
        }}
      ></div>

      {/* Login box */}
      <div className="relative z-50 bg-white rounded-2xl shadow-2xl p-10 w-[400px]">
        {/* Logo inside login box */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <IconHeartbeat size={50} stroke={2.5} className="text-red-500" />
          <span className="font-heading font-extrabold text-3xl tracking-wide text-red-500">
            Pulse
          </span>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5"
        >
          <SegmentedControl
            {...form.getInputProps("role")}
            fullWidth
            color="red"
            data={[
              { label: "Admin", value: "ADMIN" },
              { label: "Patient", value: "PATIENT" },
              { label: "Doctor", value: "DOCTOR" },
            ]}
          />

          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Enter your email"
            size="md"
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Enter your password"
            visible={visible}
            onVisibilityChange={toggle}
            size="md"
          />
          <PasswordInput
            {...form.getInputProps("confirmPassword")}
            label="Confirm Password"
            placeholder="Re-enter your password"
            visible={visible}
            onVisibilityChange={toggle}
            size="md"
          />

          <Button
            type="submit" // ✅ Add this line
            color="red"
            fullWidth
            size="md"
            radius="md"
            className="mt-2 hover"
          >
            Log In
          </Button>
          <p className="text-center text-gray-600 text-sm mt-3">
            Has an account?{" "}
            <Link
              to="/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
