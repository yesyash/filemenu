import { Layout } from "@/components/ui/layout/layout";
import Head from "next/head";
import React from "react";

export const ComponentStructure = () => {
    return (
        <>
            <Head>
                <title>Component Structure</title>
            </Head>

            <Layout>
                <main className="grid grid-cols-2 p-4 lg:my-4 lg:px-8"></main>
            </Layout>
        </>
    );
};
