import { PropTypes } from 'prop-types';
import { Overlay, Popup } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ imgUrl, alt, toggleModal }) => {
    const onClick = e => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handlePressEsc = () => {
            toggleModal();
        };
        document.addEventListener('keydown', handlePressEsc);
        return () => {
            document.removeEventListener('keydown', handlePressEsc);
        };
    }, [toggleModal]);

    return (
        <Overlay>
            <Popup onClick={onClick}>
                <img src={imgUrl} alt={alt} onClick={onClick} />
            </Popup>
        </Overlay>
    );
};

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Modal;
