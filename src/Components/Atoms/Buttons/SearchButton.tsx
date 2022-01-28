import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

type SearchButtonProps = {
    Title?:string;
    Disabled?:""|"disabled"
    Size?: "large" | "small" | "medium";
    Color?: "primary" | "secondary" | "success" | "error";
}

export const SearchButton = (props:SearchButtonProps) => {
    return (
        // <IconButton color={props.color} size={props.size}>
        //     <SearchIcon />{props.Title}
        // </IconButton>
        <Button color={props.Color} size={props.Size} variant="contained" startIcon={<SearchIcon />}>
            {props.Title}
        </Button>
    )
}

SearchButton.defaultProps = {
    Title:"",
    Disabled:"",
    Size:"large",
    Color:"primary"
}
