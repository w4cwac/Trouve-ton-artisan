
import { ReactComponent as IconePosition} from "./assets/map_position.svg";
import { ReactComponent as IconeNote} from "./assets/note.svg";
import data from '../datas.json';

import './style/entrepriseCard.scss';
import {NavLink} from "react-router-dom";

export default function EntrepriseCard (props) {

    return (
        <NavLink to={`/entreprise/${props.entreprise_nom}`} className="entreprise-card d-flex flex-column justify-content-center align-items-center gap-1 card p-3 shadow col-11 col-md-4 text-center">
            <h2>{props.entreprise_nom}</h2>
            <p>{props.specialite}</p>
            <div className="d-flex">
                <IconePosition fill="#cd2c2e" />
                <p>{props.localisation}</p>
            </div>
            <p className="d-flex align-items-center">
                {props.note}
                <IconeNote fill="#ffd401" />
            </p>
        </NavLink>
    )
}