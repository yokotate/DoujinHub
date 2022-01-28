import React from 'react'
import { IconButton } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

type MenuButtonProps = {

}

export const MenuButton = (props:MenuButtonProps) => {
    return (
        <IconButton>
            <MenuSharpIcon />
        </IconButton>
    )
}
