import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchApi } from './api/api';
import { mapper } from 'utils/Mapper';
import styles from '../components/App.module.css';
import { useState, useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  const handleSubmit = data => {
    setLoading(true);
    if (isShown) {
      setImages([]);
    }
    setRequest(data);
    setIsShown(true);
    if (error) {
      console.log(error);
    }
  };

  const changeCurrentImage = (url, tags) => {
    setCurrentImage({ url: url, tags: tags });
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  useEffect(() => {
    if (!request) {
      return;
    }
    fetchApi(page, request)
      .then(response =>
        setImages(prevImages => [...prevImages, ...mapper(response.data.hits)])
      )
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request, page]);

  return (
    <div className={styles.App}>
      <Searchbar handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {isShown && (
        <>
          <ImageGallery images={images} openModal={changeCurrentImage} />
          <Button text="Load More" handlerClick={loadMore} />
        </>
      )}
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={closeModal} />
      )}
    </div>
  );
};
