import Timer from "./Timer";
import Script from "./script";

function Page() {
    return (
        <div>
            <h2>Alla scoperta delle <span className="hl">variabili</span> CSS</h2>
            <div className="controls">
                <label htmlFor="spacing">Spacing</label>
                <input type="range" id="spacing" min="10" max="200" value="10" data-sizing="px" />
                <label htmlFor="blur">Blur</label>
                <input type="range" id="blur" min="0" max="25" value="0" data-sizing="px" />
                <label htmlFor="base">Base Color</label>
                <input type="color" id="base" value="#bada55" />
            </div>
            <img src="https://source.unsplash.com/featured/800x500" alt="Random" />
            <Timer />
            <Script />
        </div>
    )
}

export default Page;