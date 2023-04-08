import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertInfo({variant, message}) {
    return (
        <Alert key={variant} variant={variant}>
            {message}
        </Alert>
    )
}