import { useContext, useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { ScoreContext } from "../../App";

const VraagEen = () => {
    let navigate = useNavigate();
    const { score, setScore } = useContext(ScoreContext);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [error, isError] = useState(false);

    useEffect(() => {
        console.log(score);
        if (selectedAnswer === "twee") {
            setScore(score + 1);
        }
    }, [selectedAnswer])

    const handleNext = () => {
        if (!!selectedAnswer && selectedAnswer !== "") {
            navigate("/vraag-drie");
        } else {
            console.log('error')
            isError(true);
        }
    }

    return (<div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around', flexDirection: 'column' }}>
        <section>
            <h3>Wie is de hoofdzanger van The Killers?</h3>
        </section>
        <section>
            <input type="radio" id="html" name="fav_language" value="een" onChange={e => setSelectedAnswer(e.target.value)} />
            <img src="/2-1.png"></img><br />
            <input type="radio" id="css" name="fav_language" value="twee" onChange={e => setSelectedAnswer(e.target.value)}/>
            <img src="/2-2.png"></img><br />
            <input type="radio" id="javascript" name="fav_language" value="drie" onChange={e => setSelectedAnswer(e.target.value)}/>
            <img src="/2-3.png"></img><br />
            <input type="radio" id="old" name="fav_language" value="vier" onChange={e => setSelectedAnswer(e.target.value)}/>
            <img src="/2-4.png"></img><br />
        </section>
        <section>
            {error ? <p style={{ color: 'red' }}>Er is iets fout gegaan. Heb je een antwoord geselecteerd?</p> : ''}
            <button onClick={(e) => handleNext()}>Volgende</button>
        </section>
    </div>)
}

export default VraagEen