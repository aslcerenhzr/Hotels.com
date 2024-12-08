import React, {useState, useEffect} from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import Error  from "../components/Error";
import Success  from "../components/Success";

function RegisterScreen(){

    const[name, setname] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [success, setsuccess] = useState()

    async function register(){
        const user={
            name,
            email,
            password
        }
        
        try {
            setloading(true)
            const result = await axios.post('/api/users/register', user).data
            setloading(false)
            setsuccess(true)

            setname('')
            setpassword('')
            setemail('')
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }
    }

    return(
        <div>
            {loading&&(<Loader/>)}
            {error&&(<Error/>)}
           

            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                {success&&(<Success message='Registration Succesed'/>)}
                    <div>
                        <h1>Register</h1>
                        <input type="text" className="form-control" placeholder="name"
                        value={name} onChange={e=>{setname(e.target.value)}}/>
                        <input type="text" className="form-control" placeholder="email"
                        value={email} onChange={e=>{setemail(e.target.value)}}/>
                        <input type="text" className="form-control" placeholder="password"
                        value={password} onChange={e=>{setpassword(e.target.value)}}/>

                        <button className="btn btn-primary mt-3" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen