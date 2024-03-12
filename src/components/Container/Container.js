import React from 'react'
import style from './Container.module.css'

const Container = ({ title, children }) => {
  return (
    <>
      <div className={style.container}>
        <h1>{title}</h1>
        <div className={style.container__data}>{children}</div>
      </div>
    </>
  )
}

export default Container
