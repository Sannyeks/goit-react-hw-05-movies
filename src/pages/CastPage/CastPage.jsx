import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { Section, CastList, CastItem } from './CastPage.styled';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a1248d45d2e1e834899a3a4a26a86367&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        const { cast } = data;
        setCast(cast);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader />;
  }
  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

  return cast.length ? (
    <Section>
      <CastList>
        {cast.map(({ name, character, profile_path }) => (
          <CastItem key={name}>
            <img
              src={!!profile_path ? IMG_PATH + profile_path : NO_IMAGE}
              alt={name}
            />
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </Section>
  ) : (
    <Section>
      <p>Cast list is empty</p>
    </Section>
  );
};

export default CastPage;
