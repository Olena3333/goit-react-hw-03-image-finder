import React from 'react';

import { Notificatio } from './Notificatio/Notificatio';

import { Searchbar } from './Searchbar';
import { Button } from './Button';
import { Modal } from './Modal-window/Modal';
import { ImageGallery } from './ImageGallery';
import { toast } from 'react-toastify';
import { fetchPics } from '../Sevise/Api';

import {
  Wrapper,
  ContentContainer,
  GalleryTitle,
  LoaderContainer,
  SideLeft,
  SideRight,
  SideTop,
  Box1,
  Box2,
  Box3,
  Box4,
} from './App.styled';
import { INITIAL_STATE_POSTS } from './InitialState';
export class App extends React.Component {
  state = { ...INITIAL_STATE_POSTS };
  async componentDidMount() {
    this.getPhotos();
    toast.info('Welcome');
  }

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;
    if (prevState.page !== page || q !== prevState.q) {
      this.getPhotos();
      toast.info('Nice photos ha');
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + prevState.per_page }));
  };

  getPhotos = async () => {
    this.setState({ loading: true });
    const { per_page, page, q } = this.state;

    try {
      const response = await fetchPics({
        per_page,
        page,
        q,
      });
      this.setState(prevState => ({
        photos: [...prevState.photos, ...response.hits],
        total: response.total,
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      toast.error(error.message);
    }
  };

  handleSetQuery = q => {
    this.setState({ q, photos: [], total: null });
  };
  toggleModal = photo => {
    this.setState(prevState => {
      const isOpened = !prevState.isOpened;
      if (isOpened) {
        toast.success('Loading...');
      } else {
        toast.info('Choose another one 😁');
      }
      return {
        isOpened,
        currentPhotoIndex: prevState.photos.indexOf(photo),
      };
    });
  };

  handleLikes = photo => {
    this.setState(prevState => ({
      photos: prevState.photos.map(el =>
        el.id === photo.id ? { ...el, likes: el.likes + 1 } : el
      ),
    }));
  };
  handleNext = () => {
    this.setState(prevState => ({
      currentPhotoIndex:
        (prevState.currentPhotoIndex + 1) % prevState.photos.length,
    }));
  };

  // Function to display the previous photo
  handleBack = () => {
    this.setState(prevState => ({
      currentPhotoIndex:
        prevState.currentPhotoIndex <= 0
          ? prevState.photos.length - 1
          : prevState.currentPhotoIndex - 1,
    }));
  };
  render() {
    const { photos, q, total, loading, isOpened, currentPhotoIndex } =
      this.state;
    const selectedPhoto = photos[currentPhotoIndex];

    return (
      <Wrapper>
        <ContentContainer>
          <Searchbar setQuery={this.handleSetQuery} />
          {q && (
            <GalleryTitle>
              Image Gallery search request: {q} and results: {total}
            </GalleryTitle>
          )}
          <h2>{this.state.error}</h2>
          {loading && !photos.length ? (
            <LoaderContainer>
              <div className="box box-1">
                <Box1>
                  <SideLeft></SideLeft>
                  <SideRight></SideRight>
                  <SideTop></SideTop>
                </Box1>
              </div>
              <div className="box box-2">
                <Box2>
                  <SideLeft></SideLeft>
                  <SideRight></SideRight>
                  <SideTop></SideTop>
                </Box2>
              </div>
              <div className="box box-3">
                <Box3>
                  <SideLeft></SideLeft>
                  <SideRight></SideRight>
                  <SideTop></SideTop>
                </Box3>
              </div>
              <div className="box box-4">
                <Box4>
                  <SideLeft></SideLeft>
                  <SideRight></SideRight>
                  <SideTop></SideTop>
                </Box4>
              </div>
            </LoaderContainer>
          ) : (
            <ImageGallery
              photos={photos}
              handleLikes={this.handleLikes}
              toggleModal={this.toggleModal}
            />
          )}

          {total > photos.length ? (
            <Button loading={loading} onClick={this.handleLoadMore}>
              {!loading ? 'Loading...' : 'Load more'}
            </Button>
          ) : null}

          {isOpened && selectedPhoto ? (
            <Modal close={this.toggleModal} selectedPhoto={selectedPhoto} />
          ) : null}
        </ContentContainer>
      </Wrapper>
    );
  }
}
