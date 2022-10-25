import styles from '../Searchbar/Searchbar.module.css'
import { CiSearch } from "react-icons/ci";
import PropTypes from 'prop-types'
import { useState } from 'react';

export const Searchbar = ({handleSubmit}) => {  
const [request, setRequest] = useState('')

  const handleChange = (e) => {
    setRequest(e.target.value)
  };
  
  const onSubmit = evt => {
    evt.preventDefault()
    handleSubmit(request)
  }

    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={onSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
              <CiSearch />
            </button>

            <input
              onChange={handleChange}
              name="input"
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  };

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

