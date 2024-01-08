import React from 'react'







export function Button({handlecilk,children}) {
    console.log('rendering button - ',children);
  return (
    <div>
      <button onClick={handlecilk}>
        {children}
      </button>
    </div>
  )
}

// wrapping the component inside memo
// ,Count,Title
export default React.memo(Button)


