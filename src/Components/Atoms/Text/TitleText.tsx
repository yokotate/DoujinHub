import { Box, Typography } from '@mui/material'
import React from 'react'

type TitleTextProps = {
    title:string;
}

export const TitleText = (props:TitleTextProps) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>{props.title}</Typography>
        </Box>
    )
}
