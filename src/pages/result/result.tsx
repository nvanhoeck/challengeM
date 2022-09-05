import { useContext, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { ScoreContext } from "../../App";

const Home = () => {
    let navigate = useNavigate();
    const { score, setScore } = useContext(ScoreContext);
    const [reveal, setReveal] = useState(false);

    function determineText(): string {
        switch(score) {
            case 0: return 'Schande!!! Een echte Schande'
            case 1: return 'Vandaag is rood, de kleur van jouw wangen! (van schaamte)'
            case 2: return 'I find your lack of knowledge...disturbing'
            case 3: return 'Net niet goed genoeg.'
            case 4: return 'Allee, tis al meer positief dan negatief, das ook al iets.'
            case 5: return 'Mwja, ge komt in de buurt'
            case 6: return 'Dit doet me vermoeden dat je gecheated hebt, maar om het toch niet te tonen, eentje hebt fout geantwoord.'
            case 7: return 'Sneaky cheater!'
            default: return "";
        }
    }

    return (<div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around', flexDirection: 'column' }}>
        <section>
            <h1>En dan nu, de score!!!</h1>
            { reveal ? <h1>{determineText()}</h1> : <button onClick={(e) => setReveal(true)}>Show me!</button> }
            {reveal ? <h1>{score}<span>/7</span></h1> : null}
        </section>
    </div>)
}

export default Home