import { useState } from 'react'
import './App.css'
import picFirst from './assets/working.png'
import picSecond from './assets/books.png'
import picThird from './assets/computer.png'

function App() {

    return (
        <>
            <header>
                <h1>One | Recreate and Improve</h1>
            </header>
            <main>
                <article className={`article`}>
                    <h2>About Me</h2>
                    <p>
                        What I have done so far is to build websites with HTML, CSS, Vanilla JS, JQuery and now React. 
                    </p>
                    <p>
                        The projects I have done so far are a portfolio filled with small projects from the 
                        previous course. For example a game of hanged man and a wedsite connected to an API 
                        that works as a randomizer.
                    </p>
                    <img className='pic' src={picFirst} alt=''/>
                </article>

                <article className={`article`}>
                    <h2>Idea</h2>
                    <p>
                        My idea for the personal project is a random number generator, 
                        hopefully that lets the user chose different types of dices and 
                        roll them the amount of times the user need them to. I am going to call it D20.
                    </p>
                    <p>
                        The motivation behind the project is Dungeons and Dragons. I have already 
                        done a random spell generator for a past assignment and thought bulding a 
                        mobile first site could benefit players of the game. 
                    </p>
                    <img className='pic' src={picSecond} alt=''/>
                </article>

                <article className={`article`}>
                    <h2>Design</h2>
                    <p>
                        The design style for the project should include colors taken from the franchise 
                        and be simple and easy to understand. Therefore, I chose 
                        <a href='https://dribbble.com/shots/17423785-Weather-Interface'>this</a> design from dribble. 
                    </p>
                    <p>
                        The motivation behind the choice is the simplicity of the design and the 
                        use of of rounded courner/borders which I feel create a softness around the design. 
                    </p>
                    <img className='pic' src={picThird} alt=''/>
                </article>

                <button>Switch Article</button>
            </main>
        </>
    )
}

export default App;