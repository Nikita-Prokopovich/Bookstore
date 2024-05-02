import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { renderStarRating, getRandomRating } from '../../api/api';
import Title from "../Title/Title";
import './BookDetails.css'


function BookDetails() {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const [bookData, setBookData] = useState<any>(null);

    useEffect(() => {
        const storedBook = localStorage.getItem('bookData');
        if (storedBook) {
            setBookData(JSON.parse(storedBook));
        }
    }, []);

    const book = useSelector((state: RootState) =>
        state.books.books.find((book) => book.isbn13 === isbn13)
    );

    useEffect(() => {
        if (book) {
            localStorage.setItem('bookData', JSON.stringify(book));
            setBookData(book);
        }
    }, [book]);

    if (!bookData) {
        return <div>Не найдено</div>;
    }

    return (
        <>
            <Title>{bookData.title}</Title>
            <div className="book-details-wrapper">
                <div className="book-details-container">
                    <div className="image-box"><img className="book-details-image" src={bookData.image} alt={bookData.title} /></div>
                    <div className="book-details">
                        <div className="price-and-rating">
                            <p className="book-details-price">{bookData.price}</p>
                            <div>{renderStarRating(getRandomRating(), 'star-in-card')}</div>
                        </div>
                        <div className="book-information">
                            <div className="left-side">
                                <p>Authors</p>
                                <p>Publisher</p>
                                <p>Language</p>
                                <p>Format</p>
                            </div>
                            <div className="right-side">
                                <p>Lentin Joseph, Aleena Johny</p>
                                <p>Apress, 2022</p>
                                <p>English</p>
                            </div>
                        </div>
                        <div>More details</div>
                        <button className="button__add-to-cart">ADD TO CART</button>
                    </div>
                </div>
                <div className='tabs-container'>
                    <div className='tabs'>
                        <button className='tabs_item tabs_item_border-color'>Description</button>
                        <button disabled className='tabs_item tabs_item_hover'>Authors</button>
                        <button disabled className='tabs_item tabs_item_color'>Reviews</button>
                    </div>
                </div>
                <div className="book-details-description">
                        <p> Start programming your own robots using Robot Operation System (ROS). Targeted for absolute beginners in ROS, Linux, and Python, this guide lets you build your own robotics projects. <br/><br/>
                        You'll learn the basic foundation of Ubuntu Linux. Begin with the fundamentals. Installation and useful commands will give you the basic tools you need while programming a robot. Then add useful software applications that can be used while making robots. Programming robots can be done using any of the programming languages. Most popular programming languages are Python and C++. You will incorporate the fundamentals of C++ by learning object oriented programing concepts from example and building C++ projects. <br/><br/>
                        Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands-on experience working with hardware to create a real robot.
                        </p>
                </div>
                <div className="share-button-container">
                    <button className="button-facebook"></button>
                    <button className="button-twitter"></button>
                    <button className="button-share"></button>
                </div>
            </div>
        </>
    );
};

export default BookDetails;





