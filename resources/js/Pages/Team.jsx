import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function Team({ auth }) {
    return (
        <>
            <Head title="Licencia ASUDEG" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen mt-32">
                <main className="flex-grow">
                    <div className="py-8 bg-gray-50">
                        <div className="container px-4 mx-auto">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                        </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer auth={auth} />
        </>
    );
}
