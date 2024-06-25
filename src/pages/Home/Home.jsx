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

            <div className="list-professions">
                <div className="profession-item">
                    <div className="icon-container">
                        <img src="/src/assets/img/profession/profession-1.svg" className="ascac"/>
                    </div>
                    <div className="main-info">
                        <div className="entry-threshold">
                            <span className="title">Entry threshold</span>
                        </div>
                    </div>
                    <div className="action-container">

                    </div>
                </div>
            </div>

            <NavBar />
        </>
    )
}