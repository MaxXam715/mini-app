import "./Profession.scss";
import LabelJunior from "./../../assets/icons/badge/Junior.svg";
import {Link} from "react-router-dom";

export default function Profession() {
    return (
        <>
            <div className="profession-info">

                <div className="info-bar">
                    <span className="title">Профессия</span>
                    <div className="status-wrapper">
                        <div className="status-income">
                            <span className="label">текущий доход</span>
                            <i className="icon coin"></i>
                            <span className="count">0</span>
                            <span className="in-time">в ч.</span>
                        </div>
                    </div>
                </div>

                <div className="card-profession">
                    <div className="icon-container">
                        <img src="/src/assets/img/profession/profession-1.svg" className="ascac"/>
                    </div>
                    <div className="main-info">
                        <div className="badges-container">
                            <div className="item">
                                <img src={LabelJunior} alt=""/>
                            </div>
                        </div>
                        <span className="title-profession">Тестировщик</span>
                        <span className="required-skills">Требуемые навыки: 10</span>
                    </div>
                </div>

            </div>

            <div className="skills-container">
                <div className="header-info">
                    <div className="left-col">
                        <span className="title">Навыки</span>
                        <span className="count">0/10</span>
                    </div>
                    <div className="right-col">
                        <div className="status-skills">
                            <span className="label-skills not-explore">Не исследована</span>
                            {/*<span className="label-skills explore">Исследуется</span>*/}
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="skills-empty">
                        <img src="/src/assets/icons/lock.svg" alt=""/>
                        <span className="desc">Чтобы открыть навыки, профессию нужно исследовать</span>
                        <div className="research-award">
                            <span className="title">Награда за исследование</span>
                            <div className="count-wrapper">
                                <i className="icon coin"></i>
                                <span className="count">+20</span>
                            </div>
                        </div>
                    </div>
                    {/*<button type="button" className="btn btn-primary btn-explore-profession">Исследовать профессию</button>*/}
                    <Link to="/profession-list" className="btn btn-primary btn-explore-profession">Исследовать профессию</Link>
                </div>

            </div>

        </>
    )
}