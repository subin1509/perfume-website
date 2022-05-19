import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../assets/css/Login.module.css';

const Login = () => {
  const [state, setState] = useState({
    userId: '',
    userPassword: '',
  });

  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const res = await axios(options);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleLogin = () => {
    requestPost('/users/login', state).then(res => console.log(res));
    // res == true이면 home(로그인 상태)으로 이동
  }

  return (
    <section className={styles.login}>
      <h1 className={styles.srOnly}>로그인</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label 
            className={styles.label}
            htmlFor="userId"
          >
            아이디
          </label>
          <input 
            className={styles.input}
            id="userId"
            type="text"
            name="userId"
            value={state.userId}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label 
            className={styles.label}
            htmlFor="userPassword"
          >
            비밀번호
          </label>
          <input
            className={styles.input}
            id="userPassword"
            type="text"
            name="userPassword"
            value={state.userPassword}
            onChange={handleChangeState}
          />
        </div>
        <button 
          type="button"
          onClick={handleLogin}
          className={styles.button}
        >
          로그인
        </button>
        <div>
          <div className={styles.links}>
            <Link to="/find-id" className={styles.link}>아이디 찾기</Link>
            <span>|</span>
            <Link to="/find-id" className={styles.link}>비밀번호 찾기</Link>
          </div>
          {/* Link to Sign-up */}
          <button 
            type="button" 
            className={styles.button}
          >
            회원가입
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login