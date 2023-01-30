import { useState } from 'react';
import { useData } from '../data'

export default function Meme(){
    const allMemes = useData();
    const[allmemes, setmeme] = useState(allMemes);
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        RandomImage:"https://i.imgflip.com/1h7in3.jpg"
    });

    function handleChange(event){
        const {name,value} = event.target;
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    function rand(){
        let a = Math.floor(Math.random() * allMemes.length);
        let url = allMemes[a].url ;
        setMeme((prevState)=> ({
            ...prevState,
            RandomImage: url
        }));
    }

    return(
        <main>
            <div className="form">
                <input 
                type="text"
                className="form-input"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
                placeholder="Top Text" />
                <input 
                type="text"
                className="form-input"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
                placeholder="bottom Text"  />
                <button
                onClick={rand}
                className="form-button"
                >Get a new meme image</button>
            </div>
            <div className='meme'>
                <img src={meme.RandomImage} className="MemeImg"></img>
                <h2 className='Top Text'>{meme.topText}</h2>
                <h2 className='Bottom Text'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}