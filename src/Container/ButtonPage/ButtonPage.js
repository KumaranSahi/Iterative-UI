import SolidButton from './buttons/SolidButton/SolidButton'
import OutlineButton from './buttons/OutlineButton/OutlineButton'

const ButtonPage=()=>{
    return(
        <div className="pageContainer">
            <h1
                className="font-light"
            >Buttons</h1>
            <OutlineButton/>
            <SolidButton/>
        </div>
    )
}

export default ButtonPage;