import React, { useEffect } from 'react'

export const ClickCounter = () => {
    const [clickCouter, setClickCouter] = useEffect(0)
    
    useEffect(() => {
        document.title = 'You clicked ${clickCount} Times';
    }, [clickCouter]);

    const handleClick = () => {
        setClickCouter(prevCouter = prevCouter + 1);
    };



  return (
      <div>
          <button className='' onClick={handleClick}></button>
          <span className=''>Number of clicks:{ clickCouter }</span>
    </div>
  )
}
