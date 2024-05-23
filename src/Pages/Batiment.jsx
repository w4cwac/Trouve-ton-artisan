import { ReactComponent as Loupe } from "../components/assets/loupe.svg";
import Header from "../components/header";
import Footer from "../components/footer";
import data from '../datas.json';
import './styles/batiment.scss';
import EntrepriseCard from "../components/Entreprisecarte";
import {useState} from "react";


export default function Batiment () {

    const [inputResearch, setInputResearch] = useState("");



    const handleInputChange = (e) => {
        let valeur = e.target.value;
        valeur.length > 2 && setInputResearch(valeur);
        valeur.length === 0 && setInputResearch("");
    }

    return (
        <>
            <Header></Header>
            <section className="d-flex flex-column align-items-center">
                <article className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-dark text-center">Entreprises du bâtiment</h2>
                    <div className="champ_recherche d-flex flex-row justify-content-center align-items-center card col-8 rounded-4 p-1 gap-1 mb-4 mt-3">
                        <Loupe />
                        <input onChange={handleInputChange} type="text" placeholder="Recherchez un artisan"/>
                    </div>

                </article>

                <article className="article-batiment w-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center align-items-center align-items-md-stretch col-12 gap-2 p-2 mt-2 mb-2">
                        {
                            data.filter((val) => {
                                return val.specialty.toLowerCase().includes(inputResearch.toLowerCase()) || val.location.toLowerCase().includes(inputResearch.toLowerCase()) || val.name.toLowerCase().includes(inputResearch.toLowerCase());
                            }).map((val, key) => {
                                    if (val.category === "Bâtiment") {
                                        return <EntrepriseCard id={val.id} key={val.id} icone_specialite={val.icone} entreprise_nom={val.name} specialite={val.specialty} localisation={val.location} note={val.note} />
                                    }
                                    return null;
                                }
                            )
                        }
                    </div>
                </article>
            </section>
            <Footer></Footer>
        </>
    )
}