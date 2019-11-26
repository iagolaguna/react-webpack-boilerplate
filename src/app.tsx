import * as React from 'react'
import { Input } from './components/input'

export const App = () => {
    const [value, setValue] = React.useState("Initial value")
    return (<Input value={value} onChange={setValue} />)
}
