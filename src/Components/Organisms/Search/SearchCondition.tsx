import { FormControl, Grid, TextField } from '@mui/material';
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
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs="auto">
                    <SelectBox {...props.SelectBoxStatus}/>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth >
                        <TextField label={props.TextFieldText} variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs="auto">
                    <SearchButton {...props.SearchButtonStatus}/>
                </Grid>
            </Grid>
        </div>
    )
}


