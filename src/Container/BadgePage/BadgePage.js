import OutlineBadge from './OutlineBadge/OutlineBadge';
import SolidBadge from './SolidBadge/SolidBadge'

const BadgePage=()=>{
    return(
        <div className="pageContainer">
            <h1
                className="font-light"
            >Badge</h1>
            <OutlineBadge/>
            <SolidBadge/>
        </div>
    )
}

export default BadgePage