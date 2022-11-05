import React from 'react'
import smallImg from '@/assets/images/5kb.png'
import bigImg from '@/assets/images/22kb.png'
import './App.less'

const App = () => {
  return (
    <>
      <h2>webpack-react-config</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      {/* <div className={styles.smallImg}></div>  */}
      {/* <div className={styles.bigImg}></div>  */}
    </>
  )
}

export default App
