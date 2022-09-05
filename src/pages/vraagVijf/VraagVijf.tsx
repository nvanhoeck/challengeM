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
        if (selectedAnswer === "drie") {
            setScore(score + 1);
        }
    }, [selectedAnswer])

    const handleNext = () => {
        if (!!selectedAnswer && selectedAnswer !== "") {
            navigate("/vraag-zes");
        } else {
            console.log('error')
            isError(true);
        }
    }

    return (<div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around', flexDirection: 'column' }}>
        <section>
            <h3>Vul aan: And it's all in y head, but she's touching...</h3>
        </section>
        <section>
            <input type="radio" id="html" name="fav_language" value="een" onChange={e => setSelectedAnswer(e.target.value)} />
            <label htmlFor="html">Chest now, he takes off his dress now</label><br />
            <input type="radio" id="css" name="fav_language" value="twee" onChange={e => setSelectedAnswer(e.target.value)}/>
            <label htmlFor="css">Thighs now, he takes off her pants now</label><br />
            <input type="radio" id="javascript" name="fav_language" value="drie" onChange={e => setSelectedAnswer(e.target.value)}/>
            <label htmlFor="javascript">Chest now, he takes off her dress now</label><br />
            <input type="radio" id="old" name="fav_language" value="vier" onChange={e => setSelectedAnswer(e.target.value)}/>
            <label htmlFor="old">Legs now, he takes off her skirt now</label>
        </section>
        <section>
            {error ? <p style={{ color: 'red' }}>Er is iets fout gegaan. Heb je een antwoord geselecteerd?</p> : ''}
            <button onClick={(e) => handleNext()}>Volgende</button>
        </section>
    </div>)
}

export default VraagEen