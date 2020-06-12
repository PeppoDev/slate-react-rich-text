import React from 'react'

export default function DefaultElement(props) {
    return (
        <textarea {...props.attributes}>
           { props.children}
        </textarea>
    )
}
