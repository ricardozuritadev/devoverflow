import { Meta } from "@storybook/react";

import Theme from "./Theme";

const meta: Meta<typeof Theme> = {
    title: "Components/NavBar/ToggleTheme",
    component: Theme,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "The theme switcher for the application."
            }
        }
    }
};

export default meta;

// STORIES
export const Default = {
    args: {},
    argTypes: {}
};
