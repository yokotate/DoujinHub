import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export type SearchButtonProps = {
    Title?:string;
    Disabled?:""|"disabled"
    Size?: "large" | "small" | "medium";
    Color?: "primary" | "secondary" | "success" | "error";
    onClick:()=>void;
}

export const SearchButton = (props:SearchButtonProps) => {
    return (
        <Button color={props.Color} size={props.Size} variant="contained" startIcon={<SearchIcon />} onClick={props.onClick}>
            {props.Title}
        </Button>
    )
}

SearchButton.defaultProps = {
    Title:"",
    Disabled:"",
    Size:"large",
    Color:"primary",
    onClick:()=>{}
}
