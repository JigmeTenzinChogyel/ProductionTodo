import React from 'react'

interface Props {
    style?: string
    label?: string;
}
const Tag: React.FC<Props> = ({ style, label }): React.JSX.Element  => {
  return (
    <p className={`${ style }`}>{ label }</p>
  )
}

export default Tag