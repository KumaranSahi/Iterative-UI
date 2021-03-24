import classes from './OutlineBadge.module.css'

const OutlineBadge=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >Outline Badge</h2>
            <div className={`${classes["outline-badge"]}`}>
                Neutral badge
            </div>
            <div className={`${classes["outline-badge"]} ${classes["outline-badge-success"]}`}>
                Success badge
            </div>
            <div className={`${classes["outline-badge"]} ${classes["outline-badge-failure"]}`}>
                Failure badge
            </div>
            <div className={`${classes["outline-badge"]} ${classes["outline-badge-primary"]}`}>
                Primary badge
            </div>
            <div className={`${classes["outline-badge"]} ${classes["outline-badge-secondary"]}`}>
                Secondary badge
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522outline-badge%2522%253E%250A%2520%2520%2520%2520Neutral%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522outline-badge%2520outline-badge-success%2522%253E%250A%2520%2520%2520%2520Success%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522outline-badge%2520outline-badge-failure%2522%253E%250A%2520%2520%2520%2520Failure%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522outline-badge%2520outline-badge-primary%2522%253E%250A%2520%2520%2520%2520Primary%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522outline-badge%2520outline-badge-secondary%2522%253E%250A%2520%2520%2520%2520Secondary%2520badge%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "348px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="badge HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522outline-badge%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Neutral%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522outline-badge%2522%255D%257D%2520%2524%257Bclasses%255B%2522outline-badge-success%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Success%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522outline-badge%2522%255D%257D%2520%2524%257Bclasses%255B%2522outline-badge-failure%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Failure%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522outline-badge%2522%255D%257D%2520%2524%257Bclasses%255B%2522outline-badge-primary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Primary%2520badge%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522outline-badge%2522%255D%257D%2520%2524%257Bclasses%255B%2522outline-badge-secondary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520Secondary%2520badge%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "348px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="badge JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.outline-badge%257B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--neutral%29%253B%250A%2520%2520%2520%2520padding%253A%25200.3rem%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%2520%2520%2520%2520border-radius%253A%25201rem%253B%250A%2520%2520%2520%2520color%253A%2520var%28--neutral%29%253B%250A%257D%250A%250A.outline-badge-success%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--success-bright%29%253B%250A%2520%2520%2520%2520color%253A%2520var%28--success%29%253B%250A%257D%250A%250A.outline-badge-failure%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--failure-mild%29%253B%250A%2520%2520%2520%2520color%253A%2520var%28--failure%29%253B%250A%257D%250A%250A.outline-badge-primary%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--primary%29%253B%250A%2520%2520%2520%2520color%253A%2520var%28--primary%29%253B%250A%257D%250A%250A.outline-badge-secondary%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--secondary%29%253B%250A%2520%2520%2520%2520color%253A%2520var%28--secondary%29%253B%250A%257D"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="badge CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default OutlineBadge;