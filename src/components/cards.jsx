import '../css/cards.css'
import Img from '../img/Python1.png'


const Cards = () => {
    return (
        <>
            <div id='cards' >
                <div id='title'>
                    <h1>Python</h1>
                </div>
                <div id='desc'>
                    <p>
                        научись программировать на Python
                        в нашей игре !
                    </p>
                </div >
                <div id='img-card'>
                    <img src={Img} />  
                </div>   
            </div>
        </>
    )
}

export {  Cards  }