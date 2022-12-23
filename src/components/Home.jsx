import Film from "./Film";
import { useState } from "react";


export default function Home(){
    const [txtState, setTxtState] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [filmImageUrl, setFilmImageUrl] = useState("");

    const fetchApi = function(){
        setFilmImageUrl((prev)=>"https://www.shorturl.at/img/shorturl-icon.png");
        setFilmTitle((prev)=>"Nepostojuci film");
    }
    
    return (
        <>
            <h1 style={{
                height: 100,
                textAlign: "center"
            }}>Tvoje ocene filmova</h1>
            <div style={{
            display: "flex",
            justifyContent: "center"
            }}>
                <input type="text" value={txtState} onChange={(event) => setTxtState((prev) => event.target.value)} />
                <button onClick={fetchApi}>Search</button>
            </div>
            <div style={{
                textAlign:"center",
                fontSize:"large",
            }}>
                <Film title={filmTitle} image={filmImageUrl} />
                
            </div>
        </>
    )
}