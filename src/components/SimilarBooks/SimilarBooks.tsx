import './SimilarBooks.css'
import Image from "../../assets/1.svg"
import Image2 from "../../assets/2.svg"
import  Image3 from "../../assets/3.svg"

export default function SimilarBooks() {
    return (
        <>
        <div className="similar-container">
            <div className='similar-wrapper'>
                <h1 className="similar-title">Similar Books</h1>
            </div>
            <div className='similar-box'>
                <img src={Image}></img>
                <img src={Image2}></img>
                <img src={Image3}></img>
            </div>
        </div>
        </>
    )
}