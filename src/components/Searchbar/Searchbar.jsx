import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    BtnLabel,
    BtnSearch,
    Form,
    Header,
    InputSearh,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(value.trim());
        setValue('');
    };

    const handleChange = ({ target: { value } }) => {
        setValue(value);
    };

    return (
        <Header onSubmit={handleSubmit}>
            <Form>
                <BtnSearch type="submit">
                    🔍
                    <BtnLabel>Search</BtnLabel>
                </BtnSearch>

                <InputSearh
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={handleChange}
                />
            </Form>
        </Header>
    );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
