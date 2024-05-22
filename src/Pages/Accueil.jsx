import Header from "../components/header";
import Footer from "../components/footer";
import data from '../datas.json';
import EntrepriseCard from "../components/Entreprisecarte";
import { useState,useEffect } from "react";

export default function Accueil (){
    let tableauEntreprises = useState([]);
    let [troisEntreprises, setEntreprises]   = useState([]);

    useEffect(() => {



        tableauEntreprises = [];

        data.map((item) => {
            tableauEntreprises.push(item);
        })

        const tableauEntreprisesTemp = [...tableauEntreprises];

        tableauEntreprisesTemp.sort((a, b) => b.note - a.note);
        const topTroisEntreprises = tableauEntreprisesTemp.slice(0, 3);


        setEntreprises(topTroisEntreprises);



    }, [])

    return(
        <div>
            <Header></Header>
            <section>
                <ul>
                    <li>Etape 1 : Choisir une catégorie d'artisanat dans le menu.</li>
                    <li>Etape 2 : Choisir un artisan.</li>
                    <li>Etape 3 : Le contacter via le formulaire.</li>
                    <li>Etape 4 : Une réponse sera apportée sous 48h.</li>
                </ul>
            </section>
            <section className="section-entreprises pt-4 pb-4 d-flex flex-column align-items-center">
                <h1 className="text-light text-center p-3">Entreprises du mois</h1>
                <article className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start gap-2 pb-md-5 col-12 col-md-11">
                    {
                        troisEntreprises.map((item, key) =>
                            <EntrepriseCard
                                key={item.id}
                                id={item.id}
                                entreprise_nom={item.name}
                                specialite={item.specialty}
                                localisation={item.location}
                                note={item.note}
                            />
                        )

                    }
                </article>
            </section>
            <Footer></Footer>
        </div>


    );
}

