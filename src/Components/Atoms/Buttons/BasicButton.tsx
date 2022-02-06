import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

type BasicButtonProps = {
    Text:string;
    Size?: "large" | "small" | "medium";
    Color?: "primary" | "secondary" | "success" | "error";
    onClick:()=>void;
}

export const BasicButton = (props:BasicButtonProps) => {
    return (
        <Button color={props.Color} size={props.Size} variant="contained" onClick={props.onClick}>
            {props.Text}
        </Button>
    )
}

BasicButton.defaultProps = {
    Size:"large",
    Color:"primary",
    onClick:()=>{}
}

