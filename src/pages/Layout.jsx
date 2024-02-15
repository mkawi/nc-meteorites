import { Outlet } from "react-router-dom"

import Navigation from "../components/Navigation"

function Layout({ meteorites }) {
    return (
        <main>
            <Navigation total={meteorites.length} />
            <Outlet />
        </main>
    )
}

export default Layout