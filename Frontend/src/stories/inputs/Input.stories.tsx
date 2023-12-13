import type { Meta, StoryObj } from "@storybook/react"

import Input from "../../components/atoms/inputs/Input"

const meta: Meta<typeof Input> = {
    title: "Atoms/Inputs/Input",
    component: Input,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
    args: {
        name: 'username',
        type: 'number',
        style: 'bg-white',
        placeholder: 'username',
    }
}