import React from 'react'
import { useNavigate } from 'react-router-dom'
function Gamemenu() {
    const navigate = useNavigate()
    function clickMe() {
        navigate('/Game')
    }
    function clickMe1() {
        navigate('/Game1')
    }
    return (
        <>
            <div className="game-container" style={{ marginTop: '2%' }} >
                <div className="title-container">
                    <h1 style={{ textAlign: 'center' }}>Rock Paper Scissor Game</h1>
                </div>

                <div>

                    <div className="start-button-container">
                        <button onClick={clickMe}>START</button>
                    </div>

                </div>



            </div>




            // <div className="game-container" style={{ marginTop: '5%' }}>
            //     // <div className="title-container">
            //     //     <h1 style={{ textAlign: 'center' }}>BlackJack Game</h1>
            //     // </div>

            //     // <div>

            //     //     // <div className="start-button-container">
            //     //     //     <button onClick={clickMe1}>START</button>
            //     //     // </div>

            //     // </div>



            // </div>


        </>

    )
}

export default Gamemenu
