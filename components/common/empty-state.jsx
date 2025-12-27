import React from 'react'

const EmptyState = ({message,icon:Icon}) => {
  return (
    <div className='wrapper empty-state'>
      {Icon && <Icon  className={"size-12 text-muted-foreground/50 mx-auto mb-4"}/>}
      <p className='text-lg text-muted-foreground'>
        {message}
      </p>
    </div>
  )
}

export default EmptyState