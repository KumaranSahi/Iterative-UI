import classes from './ResponsiveImage.module.css';

const ResponsiveImage=()=>{
    return(
        <>
            <h2
                className="font-lighter"
            >Responsive Image</h2>
            <img src="https://via.placeholder.com/1920x1080" className={classes["image-responsive"]} alt="Responsive"/>
            <h3
                className="font-lightest"
            >
                HTML:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F1920x1080%2522%2520class%2522image-responsive%2522%2520alt%253D%2522Responsive%2522%252F%253E"
                style={{width: "100%", height: "204px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Responsive Image HTML"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                JSX:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F1920x1080%2522%2520className%253D%257Bclasses%255B%2522image-responsive%2522%255D%257D%2520alt%253D%2522Responsive%2522%252F%253E"
                style={{width: "100%", height: "204px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Responsive Image JSX"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h3
                className="font-lightest"
            >
                CSS:
            </h3>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.image-responsive%257B%250A%2520%2520%2520%2520width%253A%2520100%2525%253B%250A%2520%2520%2520%2520height%253A%252040vh%253B%250A%257D"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Responsive Image CSS"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </>
    )
}

export default ResponsiveImage;