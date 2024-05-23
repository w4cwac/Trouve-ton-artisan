import './style/headerModal.scss';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import data from '../datas.json'
import EntrepriseCard from './Entreprisecarte';

export default function HeaderModal ({showModal, setModalState}) {

    const recherche = useRef(null);
    const [inputResearch, setInputResearch] = useState("");


    useEffect(() => {
        !showModal
        ?
            closeModal()
        :
            openModal()
    }, [showModal])

    function closeModal () {
        gsap.to(".overlay",
            {left: "+100%", ease: "power4", duration: 0.5}
        )
        setInputResearch("");
        setModalState();
    }

    function openModal () {
        gsap.to(".overlay",
            {left: "0", ease: "power4", duration: 0.5}
        )
    }

    function HandleInput (e) {
        e.stopPropagation();
    }

    function HandleSubmit(e) {
        e.preventDefault();
        console.log(recherche.current.value = "");
        closeModal();
    }

    function HandleChange(e) {
        let valeur = e.target.value;
        valeur.length > 2 && setInputResearch(valeur);
        valeur.length < 2 && setInputResearch("");
    }


    return (
        <div className="overflow-x-hidden">
            <div className="overlay d-flex flex-column align-items-center justify-content-start gap-4" onClick={closeModal}>
                <span className="bouton_fermer">x</span>
                <div className="searchbar_modal">
                    <form onSubmit={HandleSubmit} className="d-flex flex-column">
                        <h1>Recherchez votre artisan</h1>
                        <input className="shadow" ref={recherche} onChange={HandleChange} onClick={HandleInput} placeholder="Recherchez un artisan" type="text"/>
                    </form>
                </div>
                <div className="overflow-scroll h-75 col-11 d-flex flex-column flex-md-row flex-md-wrap justify-content-md-center align-items-center align-items-md-stretch gap-2">
                    {
                        data.filter((val) => {
                            return val.specialty.toLowerCase().includes(inputResearch.toLowerCase()) || val.location.toLowerCase().includes(inputResearch.toLowerCase()) || val.name.toLowerCase().includes(inputResearch.toLowerCase());
                        }).map((val, key) => {
                                return <EntrepriseCard key={val.id} icone_specialite={val.icone} entreprise_nom={val.name} specialite={val.specialty} localisation={val.location} note={val.note} />
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}