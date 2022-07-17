import Head from "next/head";
import { useRouter } from "next/router";

// components
import { FileMenu } from "@/components/file-menu";

// static data
import { fileMenuData } from "./proposed-filestruct.data";
import { oldMenuData } from "./old-filestruct.data";
import { Layout } from "@/components/ui/layout/layout";

const Homepage = () => {
    let { pathname } = useRouter();

    return (
        <>
            <Head>
                <title>Directory structure</title>
            </Head>

            <Layout>
                <main className="grid grid-cols-2 p-4 lg:my-4 lg:px-8">
                    <div>
                        <h2 className="mb-4 text-lg font-bold lg:text-xl">
                            Old directory structure
                        </h2>

                        <FileMenu data={oldMenuData} />
                    </div>

                    <div>
                        <h2 className="mb-4 text-lg font-bold lg:text-xl">
                            New directory structure
                        </h2>

                        <FileMenu data={fileMenuData} />
                    </div>
                </main>
            </Layout>
        </>
    );
};

export default Homepage;
