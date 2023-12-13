import type { Meta, StoryObj } from "@storybook/react";

import AuthButton from "../../components/atoms/buttons/AuthButton";

const meta: Meta<typeof AuthButton> = {
    title: "Atoms/Buttons/AuthButton",
    component: AuthButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
    args: {
        label: "Sign In",
        style: "text-white",
    },
  };

export const SignUp: Story = {
    args: {
        label: "Sign Up",
        style: "text-white",
    },
  };

export const LogOut: Story = {
    args: {
        label: "Log Out",
        style: "text-white",
    },
  };