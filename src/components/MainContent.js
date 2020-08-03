import React from 'react'

function MainContent(props) {
  //console.log(props)

  return (
    <>
      <main role="main" className="">
        {/* <div className="container d-flex"> flex-shrink-0*/}
          {props.children}
        {/* </div> */}
      </main>
    </>
  )
}

export default MainContent
