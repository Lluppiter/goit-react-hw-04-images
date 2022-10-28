import { useEffect } from 'react';
import styles from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ currentImage, closeModal }) => {
  const closeByEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  });

  const { url, tags } = currentImage;
  return (
    <div className={styles.Overlay} onClick={closeByBackdrop}>
      <div className={styles.Modal}>
        <button className={styles.btn} onClick={closeModal}>
          &#9747;
        </button>
        <img src={url} alt={tags} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentImage: PropTypes.object.isRequired,
};
