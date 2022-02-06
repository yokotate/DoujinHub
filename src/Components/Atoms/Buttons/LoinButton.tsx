import React from 'react';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';

type LoginButtonProps = {
    onClick:()=>void;
}

export const LoginButton = (props:LoginButtonProps) => {
    return (
        <Button color="info" size="medium"startIcon={<LoginIcon />} onClick={props.onClick}>
            ログイン
        </Button>
    )
}
