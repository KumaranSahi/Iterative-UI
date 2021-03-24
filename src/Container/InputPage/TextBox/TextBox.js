import classes from './TextBox.module.css';

const TextBox=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >
                Textbox
            </h2>
            <input type="text" className={classes["textbox"]} placeholder="Enter Text here"/>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522textbox%2522%2520placeholder%253D%2522Enter%2520Text%2520here%2522%252F%253E"
                style={{width: "100%", height: "204px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="textbox HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520className%253D%257Bclasses%255B%2522textbox%2522%255D%257D%2520placeholder%253D%2522Enter%2520Text%2520here%2522%252F%253E"
                style={{width: "100%", height: "204px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="textbox jsx"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.textbox%257B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%2520%2520%2520%2520outline%253A%25200px%253B%250A%2520%2520%2520%2520border%253A0px%253B%250A%2520%2520%2520%2520letter-spacing%253A%25201px%253B%250A%2520%2520%2520%2520background-color%253A%2520var%28--neutral-mild%29%253B%250A%257D%250A%250A.textbox%253Afocus%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--black%29%253B%250A%257D"
                style={{width: "100%", height: "384px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="textbox css"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default TextBox;