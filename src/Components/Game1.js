import React, { useEffect, useState } from 'react';
import './Game1.css'
import { useNavigate } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function Game1() {
    const navigation = useNavigate()
    const [name, setname] = useState("")
    useEffect(() => {
        let data = localStorage.getItem("userinfo")
        let result = JSON.parse(data)
        setname(result.Name)
    }, [])
    const [isClicked, setIsClicked] = useState(false);
    const [answer, setAnswer] = useState("no data");
    const [answer1, setAnswer1] = useState("no data");
    const [shuffle1, setshuffl1] = useState(false)
    const [shuffle2, setshuffl2] = useState(true)
    const [alerts, setalert] = useState()
    const [Money, setMoney] = useState(0)



    function backToMenu() {

        navigation('/Gamemenu')
        setAnswer("no data")
        setAnswer1("no data")
    }



    function getRandomValue() {
        if (Money >= 100) {


            const random = Math.floor(Math.random() * 10)
            const random2 = Math.floor(Math.random() * 10)
            setAnswer(random)
            setAnswer1(random2)
            let pricecut = Money - 100
            setMoney(pricecut)

            if (random + random2 == 15) {
                setalert("You Won 1000, BlackJackeeeeeddddd ")
                setMoney(Money + 1000)
            } else {
                setalert("Try Again")
            }
        } else {
            setalert("Recharge Your Wallet")
        }

    }

    function Recharge() {
        setalert("Recharging.......")
        let val = prompt("choose 1 for recharge from wallet and 2 for normal")

        setTimeout(() => {
            if (val == 2) {
                setMoney(Money + 200)
                setalert("Recharged")
            } else if (val == 1) {
                if (withdraws > 0) {
                    let plus = Number(Money) + Number(withdraws)
                    // console.log(Number(plus))
                    setMoney(Number(plus))
                } else {
                    setalert("Insufficient balance in withdraw wallet")
                }
            } else {
                setalert("choose a valid value")
            }
        }, 1000);

    }

    const [withdraws, setwithdraw] = useState(0)
    function withdraw() {
        let moneydeduct = prompt()
        if (Money >= moneydeduct && moneydeduct != null) {

            let cut = Money - moneydeduct
            setMoney(cut)
            setwithdraw(moneydeduct)

        }
        else if (moneydeduct >= Money && moneydeduct != null) {
            let cut = moneydeduct - Money
            setMoney(cut)
            setwithdraw(moneydeduct)
        }
        else {
            setalert("insufficiewnt balance")
        }
    }


    // function answerOfGame() {
    //     if (answer1 == "no data" && answer == "no data") {
    //         alert("please start the game");
    //     } else if (answer1 == "no data" || answer == "no data") {
    //         alert("one of the player has not started yet");
    //     } else if (answer === answer1) {
    //         alert("Draw");
    //     } else if (answer === "Rock" && answer1 === "Scissor") {
    //         alert("Rock Win");
    //     } else if (answer === "Scissor" && answer1 === "Paper") {
    //         alert("Scissor wins");
    //     } else if (answer === "Paper" && answer1 === "Rock") {
    //         alert("Paper wins");
    //     } else if (answer === "Scissor" && answer1 === "Rock") {
    //         alert("Rock wins");
    //     } else if (answer === "Rock" && answer1 === "Paper") {
    //         alert("Paper wins");
    //     } else if (answer === "Paper" && answer1 === "Scissor") {
    //         alert("Scissor wins");
    //     }
    // }

    return (


        <div className="game-play-container" >
            <div className="player-names">
                <div style={{ display: "flex", flexDirection: 'row' }}>
                    <h3>Money</h3>
                    <h3 style={{ marginLeft: 5 }}>{Money}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                    <h3>withdraw wallet balance</h3>
                    <h3 style={{ marginLeft: 5 }}>{withdraws}</h3>
                </div>

                <div>
                    <button onClick={() => {
                        Recharge()
                    }}>Recharge Wallet</button>
                    <button onClick={() => {
                        withdraw()
                    }}>withdraw</button>
                </div>
                <h3 style={{ textAlign: 'center' }}>Welcome to the game, {name}</h3>
            </div>
            <div className="game-result">
                <div className="player-box">{answer}</div>
                <div className="player-box">{answer1}</div>
            </div>
            <p>{alerts}</p>
            <div className="button-container">

                <button onClick={getRandomValue}>Shuffle</button>
                <button onClick={backToMenu}>Back to Main Menu</button>
            </div>
        </div>



    );
}

export default Game1;
