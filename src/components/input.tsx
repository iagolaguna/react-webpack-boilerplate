import * as React from 'react'

type Props = {
  onChange: (value: string) => void,
  value: string
}

export const Input = ({ onChange, value }: Props) => <input value={value} onChange={event => onChange(event.target.value)} type="text" />
