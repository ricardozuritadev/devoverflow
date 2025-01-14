import { Meta, StoryObj } from "@storybook/react";

import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar",
    component: NavBar,
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

//STORIES
export const Default: Story = {
    args: {},
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: "The main navigation bar for the application."
            }
        }
    }
};
