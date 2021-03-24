import classes from './SolidButton.module.css';

const SolidButton=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >Solid Button</h2>
            <button className={`${classes["button-solid"]} ${classes["button-primary"]}`}>
                Solid Button Primary
            </button>
            <button className={`${classes["button-solid"]} ${classes["button-secondary"]}`}>
                Solid Button Secondary
            </button>
            <button className={`${classes["button-solid"]} ${classes["button-success"]}`}>
                Solid Button Success
            </button>
            <button className={`${classes["button-solid"]} ${classes["button-warning"]}`}>
                Solid Button Warning
            </button>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522button-solid%2520button-primary%2522%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Primary%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522button-solid%2520button-secondary%2522%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Secondary%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522button-solid%2520button-success%2522%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Success%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522button-solid%2520button-warning%2522%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Warning%250A%253C%252Fbutton%253E"
                style={{width: "100%", height: "294px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Solid buttons HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522button-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522button-primary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Primary%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522button-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522button-secondary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Secondary%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522button-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522button-success%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Success%250A%253C%252Fbutton%253E%250A%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522button-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522button-warning%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Solid%2520Button%2520Warning%250A%253C%252Fbutton%253E"
                style={{width: "100%", height: "294px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Solid buttons JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.button-solid%257B%250A%2520%2520%2520%2520color%253A%2520var%28--white%29%253B%250A%2520%2520%2520%2520outline%253A%2520none%253B%250A%2520%2520%2520%2520border%253A%25200px%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%2520%2520%2520%2520font-size%253A%25201rem%253B%250A%257D%250A%250A.button-primary%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--primary%29%253B%250A%257D%250A%250A.button-secondary%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--secondary%29%253B%250A%257D%250A%250A.button-success%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--success-mild%29%253B%250A%257D%250A%250A.button-success%253Ahover%257B%250A%2520%2520%2520%2520background-color%253A%2520%2523209892%253B%250A%257D%250A%250A.button-warning%257B%250A%2520%2520%2520%2520background-color%253A%2520%2523b71212%253B%250A%257D%250A%250A.button-warning%253Ahover%257B%250A%2520%2520%2520%2520background-color%253A%2520%2523ff4848%253B%250A%257D%2520%2520%2520"
                style={{width: "100%", height: "636px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Solid buttons css module"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default SolidButton;