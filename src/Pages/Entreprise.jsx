import { useParams } from "react-router-dom";
import data from '../datas.json';
import EntrepriseDetail from "../components/DetailsEntreprise";
import React, {useEffect} from "react";
import Error404 from "./404";
import Header from "../components/header";
import Footer from "../components/footer";
import './styles/entreprise.scss';



export default function EntrepriseDetailPage () {


    const params = useParams();

    const entreprise = data.find((entreprise) => entreprise.name === params.name);
    const page_title = entreprise.specialty + " - " + entreprise.name;

    useEffect(() => {
        document.title = page_title;
    })

    if (!entreprise) {
        return <Error404 />
    }

    function Form(props) {
        return (
            <div className="d-flex flex-column justify-content-center align-content-center col-12">
                <h2 className="fs-3 text-center">Formulaire de contact</h2>
                <form className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <input className="col-10 p-3 rounded-1" name="Nom" type="text" placeholder="Nom"/>
                    <input className="col-10 p-3 rounded-1" name="Objet" type="text" placeholder="Objet"/>
                    <textarea className="col-10 p-3 rounded-1" name="Message" placeholder="Message" cols="10"/>

                    <button type="submit" className="btn btn-success">Envoyer</button>
                </form>
            </div>
        )
    }

    function ShowWebsite (props) {
        return (
            <div className="d-flex flex-column align-items-center">
                <h2 className="fs-5 text-center">
                    Site web de l'entreprise
                </h2>
                <a target="_blank" className="text-primary text-center" href={props.website}>{props.website}</a>
            </div>
        )
    }


    return (
        <div>
            <Header></Header>
        <section className="section-information d-flex flex-column justify-content-start align-items-center">
            <article className="article-titre w-100 text-center">
                <h1>Informations</h1>
            </article>
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch col-lg-11 pt-2 pb-2 pt-md-3 pb-md-3 pt-lg-4 pb-lg-4">
                <article className="article-information col-11 col-lg-6 rounded-top-2">
                    {
                        <EntrepriseDetail
                            key={entreprise.id}
                            icone={entreprise.icone}
                            entreprise_nom={entreprise.name}
                            specialite={entreprise.specialty}
                            localisation={entreprise.location}
                            note={entreprise.note}
                            apropos={entreprise.about}
                        />
                    }
                </article>

                <article className="article-form col-11 col-lg-6 p-3 d-flex flex-column align-items-center rounded-bottom-2">
                    {entreprise.website === "" && <Form email={entreprise.email} />}
                    {entreprise.website !== "" && <ShowWebsite website={entreprise.website} />}
                </article>
            </div>
        </section>
        <Footer></Footer>
        </div>
    )
}