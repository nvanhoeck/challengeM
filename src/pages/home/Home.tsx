import { useNavigate, } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (<div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around', flexDirection: 'column' }}>
        <section>
            <h1>Welkom bij de MR. Brightside Challenge!</h1>
            <h1>Klaar om de challenge aan te gaan?</h1>
        </section>
        <section>
            <button onClick={(e) => navigate("/start")}>Yes!</button>
        </section>
    </div>)
}

export default Home