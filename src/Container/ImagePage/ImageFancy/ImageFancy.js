import React from 'react';
import classes from './ImageFancy.module.css';

const ImageFancy=(props)=>{
    return(
        <>  
            <h2
                className="font-lighter"
            >Image with outline</h2>
            <div className={`${classes["image-outline"]} ${classes["image-outline-primary"]}`}>
                <img src="https://via.placeholder.com/200" alt="Profile" className={`${classes["image"]}`}/>
            </div>
            <div className={`${classes["image-outline"]} ${classes["image-outline-secondary"]}`}>
                <img src="https://via.placeholder.com/200" alt="Profile" className={`${classes["image"]}`}/>
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522image-outline%2520image-outline-primary%2522%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%2520alt%253D%2522Profile%2522%2520class%253D%2522image%2522%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522image-outline%2520image-outline-secondary%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%2520alt%253D%2522Profile%2522%2520class%253D%2522image%2522%252F%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "294px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Fancy image HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522image-outline%2522%255D%257D%2520%2524%257Bclasses%255B%2522image-outline-primary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%2520alt%253D%2522Profile%2522%2520className%253D%257B%2560%2524%257Bclasses%255B%2522image%2522%255D%257D%2560%257D%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522image-outline%2522%255D%257D%2520%2524%257Bclasses%255B%2522image-outline-secondary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%2520alt%253D%2522Profile%2522%2520className%253D%257B%2560%2524%257Bclasses%255B%2522image%2522%255D%257D%2560%257D%252F%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "294px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Fancy image JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.image-outline%257B%250A%2520%2520%2520%2520width%253A%252015rem%253B%250A%2520%2520%2520%2520height%253A%252015rem%253B%250A%2520%2520%2520%2520border-radius%253A%25200.5rem%253B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%257D%250A%250A.image%257B%250A%2520%2520%2520%2520width%253A%252015rem%253B%250A%2520%2520%2520%2520height%253A%252015rem%253B%250A%2520%2520%2520%2520border-radius%253A%25201rem%253B%250A%2520%2520%2520%2520margin-left%253A%2520-1rem%253B%250A%2520%2520%2520%2520margin-top%253A%2520-1rem%253B%250A%257D%250A%250A.image-outline-primary%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--primary%29%253B%250A%257D%250A%250A.image-outline-secondary%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--secondary%29%253B%250A%257D"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Fancy image CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default ImageFancy;