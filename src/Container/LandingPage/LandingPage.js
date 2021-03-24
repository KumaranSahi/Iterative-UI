import classes from './LandingPage.module.css';

const LandingPage=()=>{
    return(
        <div className={classes['landing-page-container']}>
            <h1>
                ITERATIVE UI
            </h1>
            <p>
                Iterative UI is a custom lightweight CSS component libray built with React and CSS modules.
            </p>
            <hr/>
            <h1>
                Getting Started
            </h1>
            <p>
                Iterative UI is super lightweight (just 6.68kb). To use it simply include the following tag in the head tag of your HTML file
            </p>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%250A%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdocpuxue8%252Fraw%252Fupload%252Fv1616424177%252FMain_iu6ouu.css%2522%253E"
                style={{width: "100%", height: "240px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Getting Started"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <hr/>
            <h1>
                Theme used
            </h1>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Aroot%2520%257B%250A%2520%2520--primary%253A%2520%2523FA9141%253B%250A%2520%2520--secondary%253A%2520%2523333c3a%253B%250A%2520%2520--success%253Agreen%253B%250A%2520%2520--success-mild%253A%2523016c5d%253B%250A%2520%2520--success-bright%253Alimegreen%253B%250A%2520%2520--failure%253Ared%253B%250A%2520%2520--failure-mild%253Asalmon%253B%250A%2520%2520--neutral%253Agray%253B%250A%2520%2520--neutral-mild%253Alightgrey%253B%250A%2520%2520--white%253Awhite%253B%250A%2520%2520--black%253Ablack%253B%250A%257D"
                style={{width: "100%", height: "473px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                title="Theme used"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <hr/>
            <p>
                Github:<a href="https://github.com/KumaranSahi/iterative-css">https://github.com/KumaranSahi/iterative-css</a>
            </p>
        </div>
    )

}

export default LandingPage;