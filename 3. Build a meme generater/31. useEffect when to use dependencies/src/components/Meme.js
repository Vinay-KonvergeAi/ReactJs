import React from "react";
import MemeData from "./MemeData"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(MemeData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    

    return(
        <main>
            <div className="form" >
                <input 
                type="text" 
                placeholder="Top text"
                className="from_input"
                />
                <input 
                type="text" 
                placeholder="Bottom text"
                className="from_input"
                />
                <button
                 className="form_btn" 
                 onClick={getMemeImage}
                >
                
                Get a new meme image 🖼
                </button>
                <img src={meme.randomImage} className="meme_image" />
            </div>
        </main>
    )
}