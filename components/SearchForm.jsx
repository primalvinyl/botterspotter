import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            background: 'white',
            '& fieldset': {
                border: 'none',
            },
        },
    },
    input: {
        width: '100%',
    }, 
    iconButton: {
        padding: 8,
    },
    divider: {
        height: 28,
        margin: 4,
    }
});

const SearchForm = ({
        submitMethod,
        resetMethod,
        onChangeMethod,
        name,
        id,
        value,
        disabled,
        placeholder,
        startAdornment,
        focusOnLoad,
        className,
    }) => {
    const materialStyles = useStyles();
    const searchFieldRef = React.useRef(null);
    const [hasError, setHasError] = React.useState(false);
    const [searchField, setSearchField] = React.useState(value);

    const handleChange = (event) => {
        setSearchField(event.target.value);
        setHasError(false);
        onChangeMethod();
    };

    const handleReset = () => {
        setSearchField('');
        setHasError(false);
        resetMethod();
        if (searchFieldRef.current && focusOnLoad) searchFieldRef.current.focus();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (searchField.length > 0) {
            submitMethod(searchField);
            setHasError(false);
        } else setHasError(true);
    };

    return (
        <div className={className}>
            <form className={materialStyles.root} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    error={hasError}
                    value={searchField}
                    disabled={disabled}
                    autoFocus
                    inputRef={searchFieldRef}
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    className={materialStyles.input}
                    onChange={handleChange}
                    autoComplete="off"
                    inputProps={{
                        spellCheck: false
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">{startAdornment}</InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                {searchField.length > 0 &&
                                    <React.Fragment>
                                        <IconButton
                                            onClick={handleReset}
                                            color="default"
                                            disabled={disabled}
                                            className={materialStyles.iconButton}
                                            aria-label="reset">
                                            <ClearIcon />
                                        </IconButton>
                                        <Divider
                                            className={materialStyles.divider}
                                            orientation="vertical" />
                                    </React.Fragment>
                                }
                                <IconButton
                                    type="submit"
                                    color="primary"
                                    disabled={searchField.length === 0 || disabled}
                                    className={materialStyles.iconButton}
                                    aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </div>
    )
};

SearchForm.protoTypes = {
    submitMethod: PropTypes.func,
    resetMethod: PropTypes.func,
    onChangeMethod: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    startAdornment: PropTypes.string,
    focusOnLoad: PropTypes.bool,
    className: PropTypes.string,
};

SearchForm.defaultProps = {
    submitMethod: () => {},
    resetMethod: () => {},
    onChangeMethod: () => {},
    name: 'search-field',
    id: 'search-field',
    value: '',
    disabled: false,
    placeholder: '',
    startAdornment: '',
    focusOnLoad: true,
    className: '',
};

export default SearchForm;
