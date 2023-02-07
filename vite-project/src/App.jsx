import React, { useState } from 'react'
import './App.css'
import picFirst from './assets/working.png'
import picSecond from './assets/books.png'
import picThird from './assets/computer.png'

const Article = ({ title, text, pic, picAlt, classes }) => {
    const sanatizedText = {__html: text };

    return (
        <article className={classes}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={sanatizedText} />
            <img src={pic} alt={picAlt} />
        </article>
    );
};

const AppendContent = ({ articles, page, setPage }) => {
    const startIndex = (page - 1);
    const endIndex = startIndex + 1;
    const visibleArticle = articles.slice(startIndex, endIndex);
    
    return (
        <>
            <div className="container">
                <div className='container'>
                    {visibleArticle.map(({ title, text, pic, picAlt, classes }) => (
                        <Article key={title} title={title} text={text} pic={pic} picAlt={picAlt} classes={classes} />
                    ))}
                </div>

                <div className="container button">
                {page > 1 ? 
                    <button onClick={() => setPage(page - 1)}>&#8249; <span>Previous</span></button>
                    : 
                    <button disabled>&#8249; <span>Previous</span></button>
                }

                <h2 className='pageIndicator'>{page}</h2>

                {articles.length > endIndex ? 
                    <button onClick={() => setPage(page + 1)}><span>Next</span> &#8250;</button>
                    : 
                    <button disabled><span>Next</span> &#8250;</button>
                }
                </div>
            </div>
        </>
    );
}

function activeArticle() {
    const [page, setPage] = useState(1);

    const articles = [
        {
            title: 'About me',
            text: 
                `What I have done so far is to build websites with HTML, CSS, Vanilla JS, JQuery and now React.
                <br><br>
                The projects I have done so far are a portfolio filled with small projects from the previous course. For example a game of hanged man and a wedsite connected to an API that works as a randomizer.`,
            pic: picFirst,
            picAlt: 'person working from computer, illustrated image',
            classes: 'article first'
        },
        {
            title: 'Idea',
            text:
                `My idea for the personal project is a random number generator, hopefully that lets the user chose different types of dices and roll them the amount of times the user need them to. I am going to call it D20.
                <br><br>
                The motivation behind the project is Dungeons and Dragons. I have already done a random spell generator for a past assignment and thought bulding a mobile first site could benefit players of the game.`,
            pic: picSecond,
            picAlt: 'books stacked on top of each other, and the top one is opened, illustrated image',
            classes: 'article second'
        },
        {
            title: 'Design',
            text:
                `The design style for the project should include colors taken from the franchise and be simple and easy to understand. Therefore, I chose <a href="https://dribbble.com/shots/17423785-Weather-Interface" target="_blank">this</a> design from dribble.
                <br><br>
                The motivation behind the choice is the simplicity of the design and the use of of rounded courner/borders which I feel create a softness around the design.`,
            pic: picThird,
            picAlt: 'laptop, illustrated image',
            classes: 'article third'
        }
    ];

    return (
        <>
            <header>
                <h1>One | Recreate and Improve</h1>
            </header>
            <main>
                <AppendContent articles={articles} page={page} setPage={setPage}/>
            </main>
            <footer>
                <h2>&copy; Ida Mäkelä</h2>
            </footer>
        </>
    );
}

export default activeArticle;