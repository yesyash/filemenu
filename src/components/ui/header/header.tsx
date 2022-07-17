import Link from "next/link";
import React from "react";
import { Layout } from "../layout";

export const Header = () => {
    return (
        <header className="py-4">
            <Layout>
                <ul className="flex items-center gap-6 p-4 lg:gap-12">
                    <li>
                        <h4>Links:</h4>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="text-blue-700 hover:underline">
                                Directory Structure
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/component-structure">
                            <a className="text-blue-700 hover:underline">
                                Component Structure
                            </a>
                        </Link>
                    </li>
                </ul>
            </Layout>
        </header>
    );
};
