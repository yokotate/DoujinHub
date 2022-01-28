import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export type SelectBoxItemProps = {
    ItemValue:string|number;
    ItemName:string;
}

type SelectBoxProps = {
    LabelID:string;
    Label:string;
    Items:SelectBoxItemProps[];
    onChange:(e:SelectChangeEvent)=>void;
}

export const SelectBox = (props:SelectBoxProps) => {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id={props.LabelID}>{props.Label}</InputLabel>
            <Select labelId={props.LabelID} onChange={props.onChange} label={props.Label}>
                <MenuItem value={10}>Ten</MenuItem>
                {props.Items.map((v, idx)=>{return(<MenuItem value={v.ItemValue}>{v.ItemName}</MenuItem>)})}
            </Select>
        </FormControl>
    )
}

SelectBox.defaultProps = {
    Label:"",
    Items:[],
    onChange:(e:SelectChangeEvent)=>{}
}
