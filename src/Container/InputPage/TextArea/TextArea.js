import React from 'react';
import classes from './TextArea.module.css';

const TextArea=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >
                Textarea
            </h2>
            <textarea
                className={classes['textarea']}
                placeholder="Type text here"
            ></textarea>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ctextarea%250A%2520%2520%2520%2520class%253D%2522textarea%2522%250A%2520%2520%2520%2520placeholder%253D%2522Type%2520text%2520here%2522%250A%253E%253C%252Ftextarea%253E"
                style={{width: "100%", height: "258px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Textarea HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ctextarea%250A%2520%2520%2520%2520className%253D%257Bclasses%255B%27textarea%27%255D%257D%250A%2520%2520%2520%2520placeholder%253D%2522Type%2520text%2520here%2522%250A%253E%253C%252Ftextarea%253E"
                style={{width: "100%", height: "258px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Textarea JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.textarea%257B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%2520%2520%2520%2520outline%253A%25200px%253B%250A%2520%2520%2520%2520border%253A0px%253B%250A%2520%2520%2520%2520width%253A%252025rem%253B%250A%2520%2520%2520%2520height%253A%252010rem%253B%250A%2520%2520%2520%2520resize%253A%2520none%253B%250A%2520%2520%2520%2520letter-spacing%253A%25201px%253B%250A%2520%2520%2520%2520background-color%253A%2520var%28--neutral-mild%29%253B%250A%2520%2520%2520%2520outline%253A%25200px%253B%250A%257D%250A%250A.textarea%253Afocus%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--black%29%253B%250A%257D"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Textarea CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}
export default TextArea;