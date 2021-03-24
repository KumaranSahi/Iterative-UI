import classes from './AvatarWithBubble.module.css'

const AvatarWithBubble=()=>{
    return(
        <>  
            <h2
                className="font-lighter"
            >
                Avatar With Bubble
            </h2>
            <img src="https://via.placeholder.com/80" className={classes["avatar"]} alt="plain avatar"/>
            <div className={classes["avatar-container"]}>
                <img src="https://via.placeholder.com/80" className={classes["avatar"]}  alt="Active avatar"/>
                <div className={`${classes["avatar-bubble"]} ${classes["bubble-active"]}`}></div>
            </div>
            <div className={classes["avatar-container"]}>
                <img src="https://via.placeholder.com/80" className={classes["avatar"]}  alt="Inactive avatar"/>
                <div className={`${classes["avatar-bubble"]} ${classes["bubble-inactive"]}`}></div>
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520alt%253D%2522plain%2520avatar%2522%252F%253E%250A%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520%2520alt%253D%2522Active%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-bubble%2520bubble-active%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257Bclasses%255B%27avatar-container%27%255D%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520%2520alt%253D%2522Inactive%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-bubble%2522%2520%2522bubble-inactive%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "330px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Avatar with bubble HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520className%253D%257Bclasses%255B%2522avatar%2522%255D%257D%2520alt%253D%2522plain%2520avatar%2522%252F%253E%250A%253Cdiv%2520className%253D%257Bclasses%255B%2522avatar-container%2522%255D%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520className%253D%257Bclasses%255B%2522avatar%2522%255D%257D%2520%2520alt%253D%2522Active%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522avatar-bubble%2522%255D%257D%2520%2524%257Bclasses%255B%2522bubble-active%2522%255D%257D%2560%257D%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257Bclasses%255B%2522avatar-container%2522%255D%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520className%253D%257Bclasses%255B%2522avatar%2522%255D%257D%2520%2520alt%253D%2522Inactive%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522avatar-bubble%2522%255D%257D%2520%2524%257Bclasses%255B%2522bubble-inactive%2522%255D%257D%2560%257D%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "330px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Avatar with bubble JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.avatar%257B%250A%2520%2520%2520%2520border-radius%253A%252050%2525%253B%250A%2520%2520%2520%2520width%253A%252060px%253B%250A%2520%2520%2520%2520height%253A%252060px%253B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%257D%250A%250A.avatar-container%257B%250A%2520%2520%2520%2520width%253A%2520auto%253B%250A%2520%2520%2520%2520height%253A%2520auto%253B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520position%253A%2520relative%253B%250A%257D%250A%250A.avatar-bubble%257B%250A%2520%2520%2520%2520position%253A%2520absolute%253B%250A%2520%2520%2520%2520bottom%253A%25205%2525%253B%250A%2520%2520%2520%2520right%253A%25201%2525%253B%250A%2520%2520%2520%2520width%253A%25200.8rem%253B%250A%2520%2520%2520%2520height%253A%25200.8rem%253B%250A%2520%2520%2520%2520border-radius%253A%252050%2525%253B%250A%257D%250A%250A.bubble-active%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--success-bright%29%253B%250A%257D%250A%250A.bubble-inactive%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--failure%29%253B%250A%257D"
                style={{width: "100%", height: "726px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Avatar with bubble CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default AvatarWithBubble