import "./Profession.scss";
import LabelJunior from "./../../assets/icons/badge/Junior.svg";
import {Link} from "react-router-dom";

export default function Profession() {
    return (
        <>

            <div className="G-alert success">
                <i className="icon check"></i>
                <span className="title">Награда получена</span>
            </div>

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
                        <span className="count">1/10</span>
                    </div>
                    <div className="right-col">
                        <div className="status-skills">
                            {/*<span className="label-skills not-explore">Не исследована</span>*/}
                            <span className="label-skills explore">Исследуется</span>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">

                    <div className="skill-item">
                        <div className="icon-container">
                            <img src="/src/assets/img/profession/profession-1.svg" className="ascac"/>
                        </div>
                        <div className="main-info">
                            <div className="coin-wrapper">
                                <span className="count"><i className="icon coin"></i>+20</span>
                                <div className="status-wrapper">
                                    <i className="icon check"></i>
                                </div>
                            </div>
                            <span className="name-skill">Типы тестирования</span>
                        </div>
                        <div className="col-action">
                            <Link to=""><i className="icon arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="icon-container">
                            <img src="/src/assets/img/profession/profession-1.svg" className="ascac"/>
                        </div>
                        <div className="main-info">
                            <div className="coin-wrapper">
                                <span className="count"><i className="icon coin"></i>+20</span>
                                <div className="status-wrapper">
                                    <span className="time">3:59:49</span>
                                </div>
                            </div>
                            <span className="name-skill">Методологии тестирования</span>
                        </div>
                        <div className="col-action">
                            <Link to=""><i className="icon arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="icon-container">
                            <img src="/src/assets/img/profession/profession-1.svg" className="ascac"/>
                        </div>
                        <div className="main-info">
                            <div className="coin-wrapper">
                                <span className="count"><i className="icon coin"></i>+20</span>
                                <div className="status-wrapper">
                                    <span className="success"></span>
                                </div>
                            </div>
                            <span className="name-skill">Методологии тестирования</span>
                        </div>
                        <div className="col-action">
                            <Link to=""><i className="icon arrow-right"></i></Link>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}