import classes from './Rating.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Rating=()=>{
    return(
        <>  
            <h2
                className="font-lighter"
            >
                Product rating
            </h2>
            <div className={classes['rating-container']}>
                <FontAwesomeIcon icon={faStar}/>
                <span>
                    5.0
                </span>
            </div>
            <div className={`${classes['rating-container']} ${classes['primary-rating']}`}>
                <FontAwesomeIcon icon={faStar}/>
                <span>
                    5.0
                </span>
            </div>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520alt%253D%2522plain%2520avatar%2522%252F%253E%250A%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520%2520alt%253D%2522Active%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-bubble%2520bubble-active%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F80%2522%2520class%253D%2522avatar%2522%2520%2520alt%253D%2522Inactive%2520avatar%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-bubble%2522%2520%2522bubble-inactive%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "402px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Ratings HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%257Bclasses%255B%27rating-container%27%255D%257D%253E%250A%2520%2520%2520%2520%253CFontAwesomeIcon%2520icon%253D%257BfaStar%257D%252F%253E%250A%2520%2520%2520%2520%253Cspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%25205.0%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%257B%2560%2524%257Bclasses%255B%27rating-container%27%255D%257D%2520%2524%257Bclasses%255B%27primary-rating%27%255D%257D%2560%257D%253E%250A%2520%2520%2520%2520%253CFontAwesomeIcon%2520icon%253D%257BfaStar%257D%252F%253E%250A%2520%2520%2520%2520%253Cspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%25205.0%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
                style={{width: "100%", height: "402px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Rating JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.rating-container%257B%250A%2520%2520%2520%2520border%253A%25202px%2520solid%2520var%28--black%29%253B%250A%2520%2520%2520%2520display%253A%2520inline-block%253B%250A%2520%2520%2520%2520padding%253A%25200.5rem%253B%250A%2520%2520%2520%2520margin%253A%25201rem%253B%250A%2520%2520%2520%2520box-sizing%253A%2520border-box%253B%250A%257D%250A%250A.rating-container%2520span%257B%250A%2520%2520%2520%2520margin-left%253A%25200.5rem%253B%250A%257D%250A%250A.primary-rating%257B%250A%2520%2520%2520%2520color%253A%2520var%28--white%29%253B%250A%2520%2520%2520%2520border%253A0px%253B%250A%2520%2520%2520%2520border-radius%253A%25200.5rem%253B%250A%2520%2520%2520%2520background-color%253A%2520var%28--primary%29%253B%250A%257D"
                style={{width: "100%", height: "510px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Rating CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default Rating;