import TextBox from './TextBox/TextBox'
import TextArea from './TextArea/TextArea'

const InputPage=()=>{
    return(
        <div className="pageContainer">
            <h1
                className="font-light"
            >
                Inputs
            </h1>
            <TextBox/>
            <TextArea/>
        </div>
    )
}

export default InputPage