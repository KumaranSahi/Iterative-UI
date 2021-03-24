import OutlinedAlert from './OutlinedAlert/OutlinedAlert'

const AlertPage=()=>{
    return(
        <div className="pageContainer">
            <h1
                className="font-light"
            >Alert</h1>
            <h2
                className="font-lighter"
            >
                Outlined Alerts
            </h2>
            <OutlinedAlert/>
        </div>
    )
}

export default AlertPage;