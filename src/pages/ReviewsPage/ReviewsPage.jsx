import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { Section, ReviewsList } from './ReviewsPage.styled';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loadind, setLoading] = useState(false);
    const { movieId } = useParams();
    useEffect(() => {
        setLoading(true);
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a1248d45d2e1e834899a3a4a26a86367&language=en-US&page=1`
        )
            .then(res => res.json())
            .then(data => {
                const { results } = data;
                setReviews(results);
            })
            .catch(() => {
                toast.error('Something went wrong');
            })
            .finally(() => setLoading(false));
        
    }, [movieId]);
    if (loadind) {
        return <Loader />;
    }

    return reviews.length ? (
        <Section>
            <ReviewsList>
                {reviews.map(({ author, content }) => (
                    <li key={author}>
                        <h4>{author}</h4>
                        <p>{content}</p>
                    </li>
                ))}
            </ReviewsList>
        </Section>
    ) : (
        <Section>
            <p>Reviews list is empty</p>
        </Section>
    );
};

export default ReviewsPage;