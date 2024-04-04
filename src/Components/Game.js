import React, { useEffect, useState } from 'react';
import './Game.css'
import { useNavigate } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function Game() {
    const navigation = useNavigate()
    const [name, setname] = useState("")
    useEffect(() => {
        let data = localStorage.getItem("userinfo")
        let result = JSON.parse(data)
        setname(result.Name)
    }, [])

    const [answer, setAnswer] = useState("no data");
    const [answer1, setAnswer1] = useState("no data");
    const [shuffle1, setshuffl1] = useState(false)
    const [shuffle2, setshuffl2] = useState(true)
    const [check, setcheck] = useState(true)
    const [alerts, setalerts] = useState("")




    function backToMenu() {

        navigation('/Gamemenu')
        setAnswer("no data")
        setAnswer1("no data")
    }

    const array = ["Rock", "Paper", "Scissor"];

    function getRandomValue(arr) {
        const random = Math.floor(Math.random() * arr.length);
        const item = arr[random];
        return item;
    }

    function getResult() {
        let arr1 = getRandomValue(array);
        setAnswer(arr1);
        let shuffleee2 = false
        setshuffl2(shuffleee2)
        if (shuffleee2 == false) {
            setshuffl1(true)
            setcheck(true)
        }

    }

    function getResult1() {
        let arr2 = getRandomValue(array);
        setAnswer1(arr2);
        let shuffleee1 = false
        setshuffl1(shuffleee1)
        if (shuffleee1 == false) {
            setshuffl2(true)
            setshuffl1(true)
            setcheck(false)
        }
    }

    function answerOfGame() {
        if (answer1 == "no data" && answer == "no data") {
            setalerts("please start the game");
        } else if (answer1 == "no data" || answer == "no data") {
            setalerts("one of the player has not started yet");
        } else if (answer === answer1) {
            setalerts("Draw");
        } else if (answer === "Rock" && answer1 === "Scissor") {
            setalerts("Rock Win");
        } else if (answer === "Scissor" && answer1 === "Paper") {
            setalerts("Scissor wins");
        } else if (answer === "Paper" && answer1 === "Rock") {
            setalerts("Paper wins");
        } else if (answer === "Scissor" && answer1 === "Rock") {
            setalerts("Rock wins");
        } else if (answer === "Rock" && answer1 === "Paper") {
            setalerts("Paper wins");
        } else if (answer === "Paper" && answer1 === "Scissor") {
            setalerts("Scissor wins");
        }
        setshuffl1(false)
        setcheck(true)


    }

    return (

        <div className='game-container'>
            <div className="game-play-container">
                <div className="player-names">
                    <h3 style={{ textAlign: 'center' }}>Welcome to the game, {name}</h3>
                </div>
                <div className="game-result">
                    <div className="player-box">{answer}</div>
                    <div className="player-box">{answer1}</div>
                </div>
                <div >
                    <p style={{ textAlign: 'center' }}>{alerts}</p>
                </div>

                <div className="button-container">
                    <button onClick={getResult}
                        disabled={shuffle1}
                    >Shuffle Player 1</button>
                    <button disabled={shuffle2} onClick={getResult1}>Shuffle Player 2</button>
                    <button disabled={check} onClick={answerOfGame}>Check Result</button>
                    <button onClick={backToMenu}>Back to Main Menu</button>
                </div>
            </div>
        </div>


    );
}

export default Game;
