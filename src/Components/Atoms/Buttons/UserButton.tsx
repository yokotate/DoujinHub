import { ThemeProvider } from '@emotion/react';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

type UserButtonProps = {
    id:string;
    onClick:(event: React.MouseEvent<HTMLButtonElement>)=>void;
}

export const UserButton = (props:UserButtonProps) => {
    return (
        <Button id={props.id} size="large" startIcon={<PersonIcon />} onClick={props.onClick} />
    )
}
