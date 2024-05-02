import BookDetails from "../components/BookDetails/BookDetails";
import ButtonBack from "../components/ButtonBack/ButtonBack";
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import { Link } from 'react-router-dom';
import SimilarBooks from "../components/SimilarBooks/SimilarBooks"


export default function BookCardPage() {
    return (
        <>
            <Link to="/">
                <ButtonBack/>
            </Link>
            <BookDetails></BookDetails>
            <SubscribeCard></SubscribeCard>
            <SimilarBooks></SimilarBooks>
        </>
    )
}