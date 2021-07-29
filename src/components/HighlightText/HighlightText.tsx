import * as React from 'react';
import { Text } from "@chakra-ui/react";
import { useMemo } from "react";

interface HighlightTextProps {
    text: string;
    highlight?: string;
}

interface Segment {
    text: string;
    isHighlighted: boolean;
}

function HighlightText(props: HighlightTextProps) {
    const segments: Segment[] = useMemo(() => {
        if (typeof props.highlight == 'undefined' || props.highlight.length === 0 || props.text.indexOf(props.highlight) === -1) {
            return [{
                isHighlighted: false,
                text: props.text
            }]
        }

        let segments: Segment[] = [];
        let string = props.text;

        while (string.indexOf(props.highlight) >= 0) {
            segments.push({
                isHighlighted: false,
                text: string.slice(0, string.indexOf(props.highlight))
            });
            segments.push({
                isHighlighted: true,
                text: string.slice(string.indexOf(props.highlight), string.indexOf(props.highlight) + props.highlight.length)
            });
            string = string.slice(string.indexOf(props.highlight) + props.highlight.length);
            console.log({string})
        }

        segments.push({
            isHighlighted: false,
            text: string
        });

        return segments;
    }, [props.text, props.highlight])


    return (
        <Text>{
            segments.map((segment, i) => (
                <span key={i} style={segment.isHighlighted ? {background: 'yellow'} : {}}>{segment.text}</span>
            ))
        }</Text>
    )
}

export default HighlightText;