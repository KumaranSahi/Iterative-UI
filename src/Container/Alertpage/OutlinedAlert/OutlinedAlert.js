import classes from './OutlinedAlert.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const OutlinedAlert=()=>{
    return(
        <>
            <div className={classes["alert"]}>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                {"  "}
                Neutral Alert
            </div>
            <br/>
            <div className={`${classes["alert"]} ${classes["alert-warning"]}`}>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                {"  "}
                Warning Alert
            </div>
            <br/>
            <div className={`${classes["alert"]} ${classes["alert-success"]}`}>
                <FontAwesomeIcon icon={faCheckCircle}/>
                {"  "}
                Success Alert
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520Neutral%2520Alert%250A%253C%252Fdiv%253E%250A%253Cbr%252F%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-warning%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520Warning%2520Alert%250A%253C%252Fdiv%253E%250A%253Cbr%252F%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-success%2522%257D%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520Success%2520Alert%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "492px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Alert HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257Bclasses%255B%2522alert%2522%255D%257D%253E%250A%2520%2520%2520%2520%253CFontAwesomeIcon%2520icon%253D%257BfaExclamationTriangle%257D%252F%253E%250A%2520%2520%2520%2520%257B%2522%2520%2520%2522%257D%250A%2520%2520%2520%2520Neutral%2520Alert%250A%253C%252Fdiv%253E%250A%253Cbr%252F%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522alert%2522%255D%257D%2520%2524%257Bclasses%255B%2522alert-warning%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%253CFontAwesomeIcon%2520icon%253D%257BfaExclamationTriangle%257D%252F%253E%250A%2520%2520%2520%2520%257B%2522%2520%2520%2522%257D%250A%2520%2520%2520%2520Warning%2520Alert%250A%253C%252Fdiv%253E%250A%253Cbr%252F%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%2522alert%2522%255D%257D%2520%2524%257Bclasses%255B%2522alert-success%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%253CFontAwesomeIcon%2520icon%253D%257BfaCheckCircle%257D%252F%253E%250A%2520%2520%2520%2520%257B%2522%2520%2520%2522%257D%250A%2520%2520%2520%2520Success%2520Alert%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "492px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Alert JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.alert%257B%250A%2520%2520%2520%2520box-shadow%253A%25205px%25204px%252012px%25201px%2520var%28--neutral-mild%29%253B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%2520%2520%2520%2520border-radius%253A%25200.5rem%253B%250A%2520%2520%2520%2520color%253A%2520var%28--neutral%29%253B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520width%253A%252010rem%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%257D%250A%250A.alert-warning%257B%250A%2520%2520%2520%2520color%253A%2520var%28--failure%29%253B%250A%2520%2520%2520%2520box-shadow%253A%25205px%25204px%252012px%25201px%2520var%28--failure-mild%29%253B%250A%257D%250A%250A.alert-success%257B%250A%2520%2520%2520%2520color%253A%2520var%28--success%29%253B%250A%2520%2520%2520%2520box-shadow%253A%25205px%25204px%252012px%25201px%2520var%28--success-bright%29%253B%250A%257D"
                style={{width: "100%", height: "528px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Alert CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default OutlinedAlert;