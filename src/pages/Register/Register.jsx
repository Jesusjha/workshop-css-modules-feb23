import React from 'react'
import style from './styles.module.css'
import dogImg from '../../assets/img/black-dog.png'

const Register = () => {
  return (
    <div className={style.container}>
    <header className={style.header}>
      <h1 className={style.logo}>
      doggies<br />
        <span className={style.logoSize}>grooming</span>
      </h1>
      <main className={style.main}>
        <form className={style.form}>
          <h2 className={style.slogan}>Create your profile</h2>
          <label className={style.formLabel}>Email</label>
          <input className={style.formInput} type="email" name="email" />
          <label className={style.formLabel}>Password</label>
          <input className={style.formInput} type="password" name="password" />
          <label className={style.formLabel}>Repeat password</label>
          <input className={style.formInput} type="password" name="repeatpassword" />
          <p className={style.formText}>Do not have an account? <span className={style.formTextLink}>Login</span></p>
        </form>
        <button className={style.registerButton}>Sign up</button>
      </main>
      <footer className={style.footer}>
        <img className={style.backgroundImage} src={dogImg}  alt="dog image" srcset="" />
      </footer>
    </header>
  </div>
  )
}

export default Register