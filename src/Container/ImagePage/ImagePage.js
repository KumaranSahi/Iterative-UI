import ResponsiveImage from './ResponsiveImage/ResponsiveImage';
import FancyImage from './ImageFancy/ImageFancy'

const CardPage=()=>{
    return(
        <div className="pageContainer">
            <h1
                className="font-light"
            >Image</h1>
            <ResponsiveImage/>
            <FancyImage/>
        </div>
    )
}

export default CardPage;