import { Component } from 'react';
import styles from '../Modal/Modal.module.css'
import PropTypes from 'prop-types'


export class Modal extends Component {

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    currentImage: PropTypes.object.isRequired  
  }

  closeByEsc = (e) => { 
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  }

  closeByBackdrop = (e) => { 
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }
  
  render() {
    const { url, tags } = this.props.currentImage
    return (
      <div className={styles.Overlay} onClick={ this.closeByBackdrop }>
        <div className={styles.Modal}>
          <button className={styles.btn} onClick={this.props.closeModal }>&#9747;</button>
          <img src={url} alt={tags} />
        </div>
      </div>
    );
  }
}
