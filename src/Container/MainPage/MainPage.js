import classes from './MainPage.module.css'

import {Route,Switch,Link} from 'react-router-dom'

import logo from '../../Assets/mk logo finD.png';

import ButtonPage from '../ButtonPage/ButtonPage'
import AvatarPage from '../AvatarPage/AvatarPage'
import AlertPage from '../Alertpage/AlertPage';
import BadgePage from '../BadgePage/BadgePage';
import CardPage from '../CardPage/CardPage'
import ImagePage from '../ImagePage/ImagePage'
import InputPage from '../InputPage/InputPage'
import ModalPage from '../ModalPage/ModalPage'; 
import RatingPage from '../RatingPage/RatingPage';
import LandingPage from '../LandingPage/LandingPage';
import Hamburger from './Dropdown/Hamburger/Hamburger'

const MainPage=()=>{
    // const componentList=[
    //     "Avatar"
    //     ,"Alert"
    //     ,"Badge"
    //     ,"Button"
    //     ,"Card"
    //     ,"Image"
    //     ,"Input"
    //     ,"Lists"
    //     ,"Navigation"
    //     ,"Modal"
    //     ,"Rating"
    //     ,"Slider"
    //     ,"Simplified Grid"
    //     ,"Text Utilities"
    //     ,"Toast/Notify/Snackbar"
    // ]
    const componentList=[
        "Getting Started"
        ,"Avatar"
        ,"Alert"
        ,"Badge"
        ,"Button"
        ,"Card"
        ,"Image"
        ,"Input"
        ,"Modal"
        ,"Rating"
    ]

    return(
        <div className={classes.mainContainer}>
            <nav className={classes.navContainer}>
                <div className={classes.navBar}>
                    <Link to="/">
                        <img src={logo} alt="Logo MK" className={classes.logoImage}/>
                    </Link>
                    <Link to="/">
                        <h1>
                            ITERATIVE UI
                        </h1>
                    </Link>
                </div>
                <div className={classes.hamburger}>
                    <Hamburger/>
                </div>
            </nav>
            <div className={classes.mainBody}>
                <div className={classes.sideBar}>
                    <ul className={classes.sideBarList}>
                        {
                            componentList.map(item=>(
                                <li key={item} >
                                    <Link to={item==="Getting Started"?'/':`/${item}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={classes.mainArea}>
                    <Switch>
                        <Route exact path="/Button" component={ButtonPage}/>
                        <Route exact path="/Avatar" component={AvatarPage}/>
                        <Route exact path="/Alert" component={AlertPage}/>
                        <Route exact path="/Badge" component={BadgePage}/>
                        <Route exact path="/Card" component={CardPage}/>
                        <Route exact path="/Image" component={ImagePage}/>
                        <Route exact path="/Input" component={InputPage}/>
                        <Route exact path="/Modal" component={ModalPage}/>
                        <Route exact path="/Rating" component={RatingPage}/>
                        <Route path="/" component={LandingPage}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainPage;