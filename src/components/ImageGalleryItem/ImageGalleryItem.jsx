import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageLiItem, Picture } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { id, smallPicture, bigPicture } = this.props;

    return (
      <ImageLiItem key={id}>
        <Picture src={smallPicture} alt="" onClick={this.openModal} />

        {showModal && (
          <Modal bigPicture={bigPicture} onClose={this.closeModal}></Modal>
        )}
      </ImageLiItem>
    );
  }
}

export default ImageGalleryItem;
