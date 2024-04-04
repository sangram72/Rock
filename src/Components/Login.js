import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Login() {


    const navigate = useNavigate();
    const [name, setname] = useState("")
    const [pass, setpass] = useState("")
    const [money, setmoney] = useState(100)
    function chanegthetext(e) {
        setname(e.target.value)

    }
    function changepass(e) {
        setpass(e.target.value)

    }
    async function storerme() {
        let data = localStorage.getItem("userinfo")
        let result = JSON.parse(data)
        console.log(result)
        if (pass != "" && name != "") {
            if (result != null) {
                if (result.Name == name && result.Password == pass) {
                    alert("sucessfully logged in")
                    navigate("/Gamemenu")
                } else {
                    alert("Inavlid Credentials")
                }
            }
            else {
                let userdata = {
                    Name: name,
                    Password: pass
                }
                localStorage.setItem("userinfo", JSON.stringify(userdata))
                alert("Data Recorded")
                setname("")
                setpass("")
                navigate("/Gamemenu", {
                    moneyyy: money
                })
            }
        } else {
            alert(" Please Fill The Required Fields")
        }

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>

            <div style={{
                backgroundColor: 'white', width: '70%', height: '40vh',

                borderRadius: 10,
                border: "1px solid green",
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexDirection: 'column'

            }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '100vh', flexDirection: 'column', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center' }}>
                        <input type='text' style={{ width: '100%', borderRadius: 5, height: '3vh', borderColor: 'green' }} placeholder='Enter Your Name'
                            onChange={chanegthetext} value={name} />
                        <input type='password' style={{ marginTop: 10, width: '100%', borderRadius: 5, height: '3vh', borderColor: 'green', }} placeholder='Enter Your Password'
                            onChange={changepass} value={pass} />
                    </div>
                    <button style={{ width: '30%', alignSelf: 'center', borderRadius: 5, borderColor: 'green' }} onClick={() => {
                        storerme()
                    }}>Log Me In</button>
                </div>

            </div>
        </div>
    )
}

export default Login