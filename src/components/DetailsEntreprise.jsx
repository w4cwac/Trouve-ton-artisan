
import { ReactComponent as MapPosition} from "./assets/map_position.svg";
import { ReactComponent as Note} from "./assets/note.svg";


export default function EntrepriseDetail ( props ) {


    return (
        <div className="d-flex flex-column justify-content-center p-4 gap-3">
            <div className="d-flex align-self-center align-items-center">
                <MapPosition fill="crimson" />
                <h2>{props.localisation}</h2>
            </div>
            <div>
                <h1 className="text-decoration-underline">{props.entreprise_nom}</h1>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="fs-6">{props.specialite}</h2>
                    <div className="d-flex">
                        <p>{props.note}</p>
                        <Note fill="#FFD600" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-decoration-underline mb-2">A propos</h2>
                <p className="mx-2">
                    {props.apropos}
                </p>
            </div>
        </div>
    )
}