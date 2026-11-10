
import React from 'react';
import Link from 'next/link';

const BookCard = ({ book }) => {
    const {
        id,
        title,
        author,
        category,
        price,
        rating,
        stock,
        description
    } = book;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p>{description}</p>

                <div className="card-actions justify-end">
                 
                    <Link href={`/books/${id}`}>
                        <button className="btn btn-primary">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
