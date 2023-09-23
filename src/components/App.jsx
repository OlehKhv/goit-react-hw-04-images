import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { getImages } from 'services/image-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorNotification } from './ImageGallery/ErorrNotification';
import Loader from './Loader/Loader';
import Notification from './ImageGallery/Notification';

export const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalImages, setTotalImages] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowNotification, setIsShowNotification] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            setError(null);
            setIsLoading(true);

            try {
                const data = await getImages(searchQuery, page);
                setImages(prev => [...prev, ...data.hits]);
                setTotalImages(data.totalHits);
                setIsShowNotification(data.totalHits === 0);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        searchQuery && fetchImages();
    }, [page, searchQuery]);

    const onSubmit = value => {
        if (value && value !== searchQuery) {
            setImages([]);
            setPage(1);
            setIsShowNotification(false);
            setSearchQuery(value);
        }
    };

    return (
        <Wrapper>
            <Searchbar onSubmit={onSubmit} />

            {isLoading && <Loader />}

            {error && (
                <ErrorNotification
                    message={`Oops Something went wrong. Error: ${error}. Please try again.`}
                />
            )}

            {isShowNotification && !isLoading && (
                <Notification
                    message={`Sorry, there are no images matching your search query: ${searchQuery}. Please change your search parameters and try again.`}
                />
            )}

            {images.length > 0 && !error && <ImageGallery images={images} />}

            {totalImages !== images.length && !isLoading && !error && (
                <Button onClick={() => setPage(prev => prev + 1)} />
            )}
        </Wrapper>
    );
};

//     window.scrollBy({
//         top: 600,
//         behavior: 'smooth',
//     });
