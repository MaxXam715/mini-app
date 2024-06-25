import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import "./home.scss";

export function HomePage() {
    useEffect(() => {document.title = 'Home'}, []);

    console.log("home")

    return (
        <>
            <div className="P-switch-contaer">
                <button type="button" className="btn btn-item">Мои</button>
                <button type="button" className="btn btn-item active">Все профессии</button>
            </div>

            <div className="ascac">

            </div>

            <NavBar />
        </>
    )
}