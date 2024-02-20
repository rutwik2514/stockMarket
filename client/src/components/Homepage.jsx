import React from 'react'

import logo from "../assets/lottie_gif.gif"

function Homepage() {
  // const myState = useSelector((state) => state.changeState);
  // const dispatch = useDispatch();
  return (
    <section className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100vw', position: 'relative'}} >
      {/* <img src={logo} style={{ height: '100vh', zIndex: '1', opacity: '0.2', position: 'absolute' }} alt="watermark" /> */}
      <div style={{ position: 'absolute', zIndex: '100', height: '100vh', width: '100vw' }}>
        <button>Homepage</button>
        <button onClick={()=>{window.location.href="/login"}}>Login</button>
        <button onClick={()=>{window.location.href="/register"}}>Signup</button>
      </div>
    </section>
  )
}

export default Homepage