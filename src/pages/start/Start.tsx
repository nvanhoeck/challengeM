import { useNavigate, } from "react-router-dom";

const Start = () => {
    let navigate = useNavigate();

    return (<div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-around', flexDirection: 'column' }}>
        <section>
            <h1>Wat ga je doen?</h1>
            <h3>Je krijgt een aantal opdrachten voor de kiezen. Na de opdrachten krijg je een score. Je kan kiezen om opnieuw te proberen, of verder door het leven te gaan als een arm sukkelaartje ;) </h3>
            <h3>Zullen we starten?</h3>
        </section>
        <section>
            <button onClick={(e) => navigate("/vraag-een")}>Yes!</button>
        </section>
    </div>)
}

export default Start