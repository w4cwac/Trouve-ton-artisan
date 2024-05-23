import Header from "../components/header";
import HeaderModal from "../components/headerModal";
import Footer from "../components/footer";

export default function Error404 (){

    return(
        <body>
            <header>
                <Header></Header>
            </header>
            <main>
                <h2 className="pt-4 pb-4 d-flex flex-column align-items-center">Page introuvable</h2>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </body>

    );
}