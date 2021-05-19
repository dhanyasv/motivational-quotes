import React , {useState,useEffect} from 'react'
import ReactCardCarousel from 'react-card-carousel';

import MediaCard from './Card';

const Quotes = () => {
    const myRef = React.createRef();
    const CONTAINER_STYLE = () => {
        return {
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "middle"
        };
      }
    
      const CARD_STYLE = () => {
        return {
          height: "250px",
          width: "250px",
          paddingTop: "80px",
          textAlign: "center",
          background: "#52C0F5",
          color: "#333",
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: "20px",
          textTransform: "uppercase",
          borderRadius: "10px",
          boxSizing: "border-box"
        }
    }
    const [quotes,setQuotes] = useState('')
    const getMotivationalQuotes = async () => {
        const resp = await fetch("https://type.fit/api/quotes");
        const data = await resp.json();
        setQuotes(data)
    }
    useEffect(()=>{
        getMotivationalQuotes()

    })
    return (
        <div style={CONTAINER_STYLE()}>

        <ReactCardCarousel ref={ myRef } autoplay={true} autoplay_speed={2500}>
            { Object.values(quotes).map((quote,index) =>{
                    return(
                        <MediaCard key={index} text={quote.text} author={quote.author}/>
                    )
                }) }
       </ReactCardCarousel>
       </div>

    )
}

export default Quotes
