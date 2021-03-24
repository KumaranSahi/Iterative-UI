import classes from './Card.module.css'

const Card=()=>{
    return(
        <>  
            <div className={classes["card-container"]}>
                <img src="https://via.placeholder.com/250" alt="card" className={classes["card-image"]}/>
                <div className={classes["typography"]}>
                    <h4>Title:</h4>
                    <p>This is a sample typography to check if it gets wrapped
                        and also to check if the card works properly
                    </p>
                </div>
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F250%2522%2520alt%253D%2522card%2522%2520class%253D%2522card-image%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%2522typography%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253ETitle%253A%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520a%2520sample%2520typography%2520to%2520check%2520if%2520it%2520gets%2520wrapped%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520and%2520also%2520to%2520check%2520if%2520the%2520card%2520works%2520properly%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Card HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257Bclasses%255B%2522card-container%2522%255D%257D%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F250%2522%2520alt%253D%2522card%2522%2520className%253D%257Bclasses%255B%2522card-image%2522%255D%257D%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257Bclasses%255B%2522typography%2522%255D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253ETitle%253A%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520a%2520sample%2520typography%2520to%2520check%2520if%2520it%2520gets%2520wrapped%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520and%2520also%2520to%2520check%2520if%2520the%2520card%2520works%2520properly%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Card JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.card-container%257B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%2520%2520%2520%2520max-width%253A%252017rem%253B%250A%2520%2520%2520%2520min-height%253A%252020rem%253B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%2520%2520%2520%2520padding%253A0.5rem%253B%250A%2520%2520%2520%2520border-bottom-right-radius%253A%25201rem%253B%250A%2520%2520%2520%2520box-shadow%253A%25207px%25209px%252013px%25205px%2520var%28--neutral-mild%29%253B%250A%257D%250A%250A.card-image%257B%250A%2520%2520%2520%2520width%253A%2520250px%253B%250A%2520%2520%2520%2520height%253A%2520250px%253B%250A%257D%250A%250A.typography%257B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%257D%250A%250A.typography%2520h4%257B%250A%2520%2520%2520%2520margin%253A%25200px%253B%250A%2520%2520%2520%2520padding-bottom%253A%25201rem%253B%250A%257D%250A%250A.typography%2520p%257B%250A%2520%2520%2520%2520width%253A%252015rem%253B%250A%2520%2520%2520%2520margin%253A%25200px%253B%250A%257D"
                style={{width: "100%", height: "744px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Card CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default Card;