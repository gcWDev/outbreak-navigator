import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../templates/Footer/Footer";
import NavBar from "../templates/NavBar/NavBar";

export default function HomeLayout() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
