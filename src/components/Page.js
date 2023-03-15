import Timer from "./Timer";

function Page() {
    function handleUpdate() {
        var suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty("--".concat(this.id), this.value + suffix);
    }
    return (
        <div>
            <h2>Alla scoperta delle <span className="hl">variabili</span> CSS</h2>
            <div className="controls">
                <label htmlFor="spacing">Spacing</label>
                <input type="range" id="spacing" min="10" max="200" value="10" dataSizing="px" onChange={handleUpdate} />
                <label htmlFor="blur">Blur</label>
                <input type="range" id="blur" min="0" max="25" value="0" dataSizing="px" onChange={handleUpdate} />
                <label htmlFor="base">Base Color</label>
                <input type="color" id="base" value="#bada55" onMouseMove={handleUpdate} />
            </div>
            <img src="https://source.unsplash.com/featured/800x500" alt="Random" />
            <Timer />
        </div>
    )
}

export default Page;