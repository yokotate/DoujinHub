import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {UserButton} from '../../Atoms/Buttons/UserButton';
import React, {useState} from 'react';

export type MenuItemProps = {
    Name:string;
    onClick:()=>void;
}

type HeaderUserButtonProps = {
    id:string;
    Items:MenuItemProps[];
}

export const HeaderUserButton = (props:HeaderUserButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
            <UserButton id={props.id + "-button"} onClick={handleClick} />
            <Menu id={props.id + "-menu"} anchorEl={anchorEl} open={open} onClose={handleClose}>
                {props.Items.map((v)=>{
                    return(
                        <MenuItem onClick={handleClose}>{v.Name}</MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}

