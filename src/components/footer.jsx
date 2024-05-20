
import './style/footer.scss';

import { ReactComponent as Liens } from "./assets/liens.svg";
import { ReactComponent as Adresse } from "./assets/map_position.svg";
import { NavLink } from 'react-router-dom';

export default function Footer () {


    return (
        <>
            <div className="p-3 d-flex flex-column flex-md-row justify-content-center mt-md-5">
                <div className="logo_site"></div>
                <div className="d-flex flex-column flex-md-row justify-content-md-center">
                    <div className="d-flex flex-column justify-content-start align-items-start gap-2 mx-4">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Liens />
                            <h2>Liens</h2>
                        </div>
                        <ul className="liens-footer pl-4">
                            <li><NavLink to="/mentions-legales">Mentions Légales</NavLink></li>
                            <li><NavLink to="/donnees-personnelles">Données personnelles</NavLink></li>
                            <li><NavLink to="/accessibilite">Accessibilité</NavLink></li>
                            <li><NavLink to="/cookies">Cookies</NavLink></li>
                        </ul>
                    </div>

                    <div className="d-flex flex-column justify-content-start align-items-start gap-2 mx-4">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Adresse />
                            <h2>Adresse</h2>
                        </div>
                        <div className="px-4">
                            <address>
                                <a href="https://goo.gl/maps/VhjFzGt2eiHdM4AV6">101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 FRANCE</a>
                            </address>
                            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}