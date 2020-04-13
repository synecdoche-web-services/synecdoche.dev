import React from 'react'

export default ({ backgroundImage, children }) => (
    <header style={{ backgroundImage }}>
        { children }
    </header>
)
