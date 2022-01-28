import { Grid, TextField } from '@mui/material';
import { SearchButton, SearchButtonProps } from '../../Atoms/Buttons/SearchButton';
import { SelectBox, SelectBoxProps } from '../../Atoms/SelectBox/SelectBox';

type SearchConditionsProps = {
    SelectBoxStatus:SelectBoxProps;
    SearchButtonStatus:SearchButtonProps;
    TextFieldText:string;
}

export const SearchConditions = (props:SearchConditionsProps) => {
    return (
        <div>
            <Grid>
                <SelectBox {...props.SelectBoxStatus}/>
                <TextField label="Outlined" value={props.TextFieldText} variant="outlined" />
                <SearchButton {...props.SearchButtonStatus}/>
            </Grid>
        </div>
    )
}
