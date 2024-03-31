import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

interface SearchBarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
    const theme = useTheme();

    return (
        <TextField
            id="search-bar"
            label="Search for a currency"
            variant="outlined"
            onChange={onChange}
            fullWidth
            sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                margin: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[3],
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',
                        borderRadius: theme.shape.borderRadius,
                    },
                    '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                    },
                },
                '& .MuiInputLabel-root': {
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                },
                '& .MuiInputBase-input': {
                    color: theme.palette.text.primary,
                },
            }}
        />
    );
};

export default SearchBar;
