import React from 'react'

type TitleTextProps = {
    title:string;
}

export const TitleText = (props:TitleTextProps) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}
