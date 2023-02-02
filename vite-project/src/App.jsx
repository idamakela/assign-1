import { useState } from 'react'
import './App.css'
import pic from './assets/working.png'

function getActiveClassName (activeArticle, currentArticle) {
    if (activeArticle ===  currentArticle) {
        return 'show-article'
    } else {
        return 'hide-article'
    }
}

function App() {
    const [activeArticle, setActiveArticle] = useState('First Article')


    return (
        <>
            <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
                <h1>About Me</h1>
                <p>
                    What I have done so far...
                </p>
                <img className='pic' src={pic} alt=''/>
            </article>

            <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
                <h1>Idea</h1>
                <p>
                    My idea for the personal project... 
                </p>
                <p>
                    The motivation behind the project...
                </p>
                <img className='pic' src={pic} alt=''/>
            </article>

            <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
                <h1>Idea</h1>
                <p>
                    The design style...
                </p>
                <p>
                    The motivation behind the choice...
                </p>
                <img className='pic' src={pic} alt=''/>
            </article>

        <div className='article'>
            <button onClick={() => {
                setActiveArticle((a) => {
                    if (a === 'First Article') {
                        return '2nd Article'
                    } else {
                        return 'First Article'
                    }
                })
            }}>Switch Article</button>
        </div>
    </>
  )
}

export default App
