import {useState} from 'react'
function Login(){
    const [info, setInfo] = useState({
        text : '',
        password: '',
        check: false,
        disabled: true
    })

    const  controlHandler = (event) => {
        const {value, type, check, name} = event.target
        return(setInfo(
            (info) => {
                return({
                    ...info,
                    [name]:type==='checkbox'?check:value
                })
            }
        ))
    }
    
        return(
            <>
            <form>
                <input type='text' name="text" value={info.text} onChange={controlHandler}></input>
                <input type='password' name="password" value={info.password} onChange={controlHandler}></input>
                <input type='checkbox' name="check" value={info.check} checked={info.check} onChange={controlHandler}></input>
            </form>
            </>
        )
    
}
export default Login