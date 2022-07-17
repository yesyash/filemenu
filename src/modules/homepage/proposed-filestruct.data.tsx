import { IDirStructure } from "../../types/dirStructure";

export const fileMenuData: IDirStructure = {
    name: "app",
    type: "folder",
    children: [
        {
            name: "scripts",
            type: "folder",
            children: [
                {
                    name: "build",
                    type: "file",
                    children: null,
                },
            ],
        },
        {
            name: "storybook",
            type: "folder",
            children: [],
        },
        {
            name: "public",
            type: "folder",
            children: [
                {
                    name: "img",
                    type: "folder",
                    children: [
                        {
                            name: "rds-logo.png",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "favicon.ico",
                    type: "file",
                    children: null,
                },
            ],
        },
        {
            name: "cypress",
            type: "folder",
            children: [],
        },
        {
            name: "src",
            type: "folder",
            children: [
                {
                    name: "icons",
                    type: "folder",
                    children: [
                        {
                            name: "github.svg",
                            type: "file",
                            children: null,
                        },
                        {
                            name: "menu.svg",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "modules",
                    type: "folder",
                    children: [
                        {
                            name: "homepage",
                            type: "folder",
                            children: [
                                {
                                    name: "index.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "homepage.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "homepage.const.ts",
                                    type: "file",
                                    children: null,
                                },
                            ],
                        },
                        {
                            name: "user-profile",
                            type: "folder",
                            children: [
                                {
                                    name: "index.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-profile.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-profile.const.ts",
                                    type: "file",
                                    children: null,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "components",
                    type: "folder",
                    children: [
                        {
                            name: "ui",
                            type: "folder",
                            children: [
                                {
                                    name: "header",
                                    type: "folder",
                                    children: [
                                        {
                                            name: "index.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "header.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "header.const.ts",
                                            type: "file",
                                            children: null,
                                        },
                                    ],
                                },
                                {
                                    name: "footer",
                                    type: "folder",
                                    children: [
                                        {
                                            name: "index.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "footer.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "footer.const.ts",
                                            type: "file",
                                            children: null,
                                        },
                                    ],
                                },
                                {
                                    name: "button",
                                    type: "folder",
                                    children: [
                                        {
                                            name: "index.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "button.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "primary-button.ts",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "secondary-button.ts",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "tertiary-button.ts",
                                            type: "file",
                                            children: null,
                                        },
                                    ],
                                },
                                {
                                    name: "cards",
                                    type: "folder",
                                    children: [
                                        {
                                            name: "index.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "squad-member.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                        {
                                            name: "new-member.tsx",
                                            type: "file",
                                            children: null,
                                        },
                                    ],
                                },
                                {
                                    name: "layout.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "loader.tsx",
                                    type: "file",
                                    children: null,
                                },
                            ],
                        },
                        {
                            name: "user-contribution",
                            type: "folder",
                            children: [
                                {
                                    name: "index.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-contribution.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-contribution.const.ts",
                                    type: "file",
                                    children: null,
                                },
                            ],
                        },
                        {
                            name: "user-tasks",
                            type: "folder",
                            children: [
                                {
                                    name: "index.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-tasks.tsx",
                                    type: "file",
                                    children: null,
                                },
                                {
                                    name: "user-tasks.const.ts",
                                    type: "file",
                                    children: null,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "styles",
                    type: "folder",
                    children: [
                        {
                            name: "global.css",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "types",
                    type: "folder",
                    children: [
                        {
                            name: "user-profile-data.ts",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "hooks",
                    type: "folder",
                    children: [
                        {
                            name: "index.tsx",
                            type: "file",
                            children: null,
                        },
                        {
                            name: "use-mount-after-fetch.tsx",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "utils",
                    type: "folder",
                    children: [
                        {
                            name: "index.ts",
                            type: "file",
                            children: null,
                        },
                        {
                            name: "get-mouse-position.ts",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "pages",
                    type: "folder",
                    children: [
                        {
                            name: "index.tsx",
                            type: "file",
                            children: null,
                        },
                        {
                            name: "[userId].tsx",
                            type: "file",
                            children: null,
                        },
                    ],
                },
                {
                    name: "constants.ts",
                    type: "file",
                    children: null,
                },
            ],
        },
        {
            name: "package.json",
            type: "file",
            children: null,
        },
        {
            name: "next.config.js",
            type: "file",
            children: null,
        },
        {
            name: "tsconfig.json",
            type: "file",
            children: null,
        },
    ],
};
