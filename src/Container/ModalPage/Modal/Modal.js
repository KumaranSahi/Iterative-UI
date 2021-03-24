import classes from './Modal.module.css';

const Modal=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >
                Simple modal
            </h2>
            <div className={classes["modal-container"]}>
                <h3>
                    Modal
                </h3>
                <hr/>
                <p>
                    This is a sample text that is to be displayed inside the modal
                </p>
                <hr/>
                <div className={classes['modal-buttons-container']}>
                    <button className={`${classes["btn-solid"]} ${classes["btn-primary"]}`}>
                        Save
                    </button>
                    <button className={`${classes["btn-solid"]} ${classes["btn-secondary"]}`}>
                        Close
                    </button>
                </div>
            </div>
            <div className={classes['modal-container']}>
                <h3>
                    Modal
                </h3>
                <hr/>
                <p>
                    This is a sample text that is to be displayed inside the modal
                </p>
                <hr/>
                <div className={classes['modal-buttons-container']}>
                    <button className={`${classes["btn-solid"]} ${classes["btn-primary"]}`}>
                        Ok
                    </button>
                </div>
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522modal-container%2522%253E%250A%2520%2520%2520%2520%253Ch3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Modal%250A%2520%2520%2520%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520sample%2520text%2520that%2520is%2520to%2520be%2520displayed%2520inside%2520the%2520modal%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-buttons-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn-solid%2520btn-primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Save%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn-solid%2520btn-secondary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Close%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522modal-container%2522%253E%250A%2520%2520%2520%2520%253Ch3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Modal%250A%2520%2520%2520%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520sample%2520text%2520that%2520is%2520to%2520be%2520displayed%2520inside%2520the%2520modal%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-buttons-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn-solid%2520%2522btn-primary%2522%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Ok%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "780px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Modal HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257Bclasses%255B%2522modal-container%2522%255D%257D%253E%250A%2520%2520%2520%2520%253Ch3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Modal%250A%2520%2520%2520%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520sample%2520text%2520that%2520is%2520to%2520be%2520displayed%2520inside%2520the%2520modal%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257Bclasses%255B%27modal-buttons-container%27%255D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522btn-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522btn-primary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Save%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522btn-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522btn-secondary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Close%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257Bclasses%255B%27modal-container%27%255D%257D%253E%250A%2520%2520%2520%2520%253Ch3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Modal%250A%2520%2520%2520%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520sample%2520text%2520that%2520is%2520to%2520be%2520displayed%2520inside%2520the%2520modal%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Chr%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257Bclasses%255B%27modal-buttons-container%27%255D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560%2524%257Bclasses%255B%2522btn-solid%2522%255D%257D%2520%2524%257Bclasses%255B%2522btn-primary%2522%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Ok%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "780px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Modal JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.modal-container%257B%250A%2520%2520%2520%2520width%253A%252025rem%253B%250A%2520%2520%2520%2520min-height%253A%252010rem%253B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%2520%2520%2520%2520border%253A1px%2520solid%2520black%253B%250A%2520%2520%2520%2520box-shadow%253A%25204px%25205px%25206px%25201px%2520lightgrey%253B%250A%2520%2520%2520%2520border-radius%253A%25200.5rem%253B%250A%2520%2520%2520%2520padding%253A%25201rem%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%257D%250A%250A.btn-solid%257B%250A%2520%2520%2520%2520color%253A%2520var%28--white%29%253B%250A%2520%2520%2520%2520outline%253A%2520none%253B%250A%2520%2520%2520%2520border%253A%25200px%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%2520%2520%2520%2520padding%253A%25201rem%253B%250A%2520%2520%2520%2520font-size%253A%25201rem%253B%250A%257D%250A%250A.btn-primary%257B%250A%2520%2520%2520%2520background-color%253A%2520var%28--primary%29%253B%250A%257D%250A%250A.btn-secondary%257B%250A%2520%2520%2520%2520background-color%253Avar%28--secondary%29%253B%250A%257D%250A%250A.modal-buttons-container%257B%250A%2520%2520%2520%2520width%253A%2520100%2525%253B%250A%2520%2520%2520%2520display%253A%2520flex%253B%250A%2520%2520%2520%2520align-items%253A%2520center%253B%250A%2520%2520%2520%2520justify-content%253A%2520flex-end%253B%250A%257D"
                style={{width: "100%", height: "888px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Modal CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default Modal;