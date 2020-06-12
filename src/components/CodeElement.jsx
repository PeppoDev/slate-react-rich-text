import React from 'react'

export default function CodeElement({props}) {
    return (
        <pre {...props.attributes}>
            <samp>{props.children}</samp>
        </pre>
    )
}
