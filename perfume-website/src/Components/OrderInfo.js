import React, { useState } from 'react';
import styles from '../assets/css/OrderInfo.module.css';

const OrderInfo = () => {
  const [state, setState] = useState(
    {
      email: "",
      userName: "",
      phoneNumber: "",
    }
  );
  
  return (
    <section className={styles.orderInfo}>
      <h1 className={styles.srOnly}>
        비회원 정보
      </h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>이메일</label>
          <div>
            <input type="text" className={styles.email}/>
            <span>@</span>
            <input type="text" className={styles.domain}/>
            <select name="domain" id="domain" className={styles.select}>
              <option value="default" selected="selected" disabled>옵션 선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.label}>이름</label>
          <input type="text" id="userName" className={styles.userName} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phoneNumber" className={styles.label}>연락처</label>
          <input type="text" id="phoneNumber" className={styles.phoneNumber}/>
        </div>
        <div>
          <ul className={styles.checkboxContainer}>
            <li>
              <input type="checkbox" id="allCheck" />
              <label htmlFor="allCheck">모두 동의합니다.</label>
            </li>
            <li>
              <input type="checkbox" id="infoCheck" />
              <label htmlFor="infoCheck">(필수) 개인정보처리방침 동의</label>
            </li>
            <li>
              <input type="checkbox" id="usingCheck" />
              <label htmlFor="usingCheck">(필수) 이용약관 동의</label>
            </li>
          </ul>
          <button type="button" className={styles.button}>저장하고 다음 단계로</button>
        </div>
      </div>
    </section>
  );
}

export default OrderInfo;