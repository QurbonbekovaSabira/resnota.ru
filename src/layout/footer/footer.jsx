import React from "react";
import style from "./footer.module.scss";
import logo from "../../assets/icon/logoBig.svg";
import { Btn } from "../../components/btn";
import { AppLink } from "../../pages/home/appLink";

export const Footer = () => {
  return (
    <>
      <div className={style.footer_firstBox}>
        <div id="container" className={style.footer_firstBox_box}>
          <div className={style.text_content}>
            <p className={style.title}>Есть вопросы?</p>
            <p className={style.text}>
              Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
              время.
            </p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className={style.labels_box}>
            <form className={style.form}>
              <div className={style.inputBox}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Ваше имя"
                  aria-label="Ваше имя"
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Телефон/E-mail"
                  aria-label="Телефон/E-mail"
                />
              </div>
              <textarea
                className={style.textarea}
                cols="20"
                rows="4"
                placeholder="Комментарий"
                aria-label="Комментарий"
              ></textarea>
            </form>
            <div>
              <div className={style.checkbox_text}>
                <input type="checkbox" id="text"></input>
                <label className={style.input_text} htmlFor="text">
                  Даю согласие на рассылку рекламных материалов, акций и скидок
                </label>
              </div>
              <div className={style.checkbox_title}>
                <input type="checkbox" id="title"></input>
                <label className={style.input_text} htmlFor="title">
                  Даю согласие на обработку моих персональных данных
                </label>
              </div>
            </div>
            <Btn color="#fff" Padding="12px 34px" bg="#D79F43">
              Отправить
            </Btn>
          </div>
        </div>
      </div>
      <div className={style.footer_secondBox}>
        <div id="container">
          <p className={style.footer_secondBox_title}>Продукция</p>
          <ul className={style.footer_secondBox_content_text}>
            <li className={style.footer_secondBox_textContent}>
              <p className={style.footer_secondBox_text}>
                Колбасные и мясные изделия
              </p>
              <p className={style.footer_secondBox_text}>Молочные продукты</p>
            </li>
            <li className={style.footer_secondBox_textContent}>
              <p className={style.footer_secondBox_text}>Морепродукты</p>
              <p className={style.footer_secondBox_text}>Пиво</p>
            </li>
            <li className={style.footer_secondBox_textContent}>
              <p className={style.footer_secondBox_text}>
                Замороженные продукты
              </p>
              <p className={style.footer_secondBox_text}>Мед</p>
            </li>
            <li className={style.footer_secondBox_textContent}>
              <p className={style.footer_secondBox_text}>Свежие овощи</p>
              <p className={style.footer_secondBox_text}>Свежие фрукты</p>
            </li>
          </ul>
          <div className={style.footer_secondBox_link_box}>
            <a className={style.footer_secondBox_link} href="#">
              О компании
            </a>
            <a className={style.footer_secondBox_link} href="#">
              Наши магазины
            </a>
            <a className={style.footer_secondBox_link} href="#">
              Контакты
            </a>
          </div>
          <hr />
          <div className={style.footer_secondBox_box}>
            <p className={style.footer_secondBox_desc}>
              2016–2021 © ООО «ПД Реснота»
            </p>
            <AppLink />
            <p className={style.footer_secondBox_descSecond}>
              Разработка и продвижение сайта — <span>SEOabsolut</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
