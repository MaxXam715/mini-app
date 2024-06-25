import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import "./home.scss";
import {Link} from "react-router-dom";

export default function HomePage() {
    useEffect(() => {document.title = 'Home'}, []);

    console.log("home")

    return (
        <>
            <div className="P-switch-contaer">
                <button type="button" className="btn btn-item">Мои</button>
                <button type="button" className="btn btn-item active">Все профессии</button>
            </div>

            <div className="list-professions">
                <Link to="/profession-empty" className="profession-item">
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
                </Link>
            </div>

            <NavBar />
        </>
    )
}