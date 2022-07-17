import Head from "next/head";

import { fileMenuData } from "./proposed-filestruct.data";
import { oldMenuData } from "./old-filestruct.data";

import { FileMenu } from "@/components/file-menu";

const Homepage = () => {
    return (
        <>
            <Head>
                <title>Directory structure</title>
            </Head>

            <main className="grid min-h-screen grid-cols-2 p-8 mx-auto my-12 max-w-7xl">
                <div>
                    <h2 className="mb-4 text-xl font-bold">
                        Old directory structure
                    </h2>
                    <FileMenu data={oldMenuData} />
                </div>

                <div>
                    <h2 className="mb-4 text-xl font-bold">
                        New directory structure
                    </h2>
                    <FileMenu data={fileMenuData} />
                </div>
            </main>
        </>
    );
};

export default Homepage;
