import { useState } from 'react';
import { Wrapper } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

export const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isShowBtn, setIsShowBtn] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    const onSubmit = value => {
        if (value && value !== searchQuery) {
            setSearchQuery(value);
        }
    };

    const handleLoadMore = () => {
        this.setState(prev => ({
            currentPage: prev.currentPage + 1,
        }));
    };

    return (
        <Wrapper>
            <Searchbar onSubmit={onSubmit} />
            {/* <ImageGallery
                searhQuery={this.state.searhQuery}
                getImgUrl={this.getImgUrl}
                toggleModal={this.toggleModal}
            />
            {this.state.isShowModal && (
                <Modal
                    imgUrl={this.state.largeImgUrl}
                    toggleModal={this.toggleModal}
                />
            )} */}
            {isShowBtn && <Button onClick={handleLoadMore} />}
        </Wrapper>
    );
};

// export class Section extends Component {
//     state = { searhQuery: '', isShowModal: false, largeImgUrl: '' };

//     getImgUrl = imgUrl => {
//         this.setState({ largeImgUrl: imgUrl });
//     };

//
