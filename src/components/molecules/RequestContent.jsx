import React from 'react'
import RequestText from '../atoms/RequestText'
import SendRequest from './SendRequest'

const RequestContent = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
        }}>
            <RequestText />
            <SendRequest />
        </div>
    )
}

export default RequestContent
