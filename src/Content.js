/* eslint-disable */
import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
`;
const engVersion = <Wrapper>
  <h1>WhatsApp Web: Everything You Need to Know</h1>
  <p>WhatsApp Web is an app that allows you to use the popular messaging platform on your computer. It offers the same features and functions as the mobile version, and can be used in conjunction with your phone.</p>
  <p>The setup process is fast and easy, and all it takes is scanning a QR code with your phone's camera.</p>
  <p>Once set up, you can send and receive messages, share images, videos, and files, and make audio and video calls. You can even access your chats while offline, and continue conversations where you left off when you get back online.</p>
  <p>Whether you're using it for business or personal use, WhatsApp Web is sure to make your life easier and more convenient 😊</p>
</Wrapper>;

const hebVersion = <Wrapper>
  <h1>איך משתמשים בוואסטאפ-ווב</h1>
  <p>וואסאטפ ווב מאפשרת לך להשתמש בפלטפורמת ההודעות הפופולרית במחשב שלך. הוא מציע את אותן תכונות ופונקציות כמו הגרסה הניידת, וניתן להשתמש בו בשילוב עם הטלפון שלך.</p>
  <p>תהליך ההגדרה מהיר וקל, וכל מה שצריך זה לסרוק קוד QR עם מצלמת הטלפון שלך.</p>
  <p>לאחר ההגדרה, תוכל לשלוח ולקבל הודעות, לשתף תמונות, סרטונים וקבצים ולבצע שיחות שמע ווידאו. אפשר גם לגשת לצ'אטים שלך במצב לא מקוון, ולהמשיך בשיחות מהמקום שבו הפסקת כשתחזור לאינטרנט.</p>
  <p>😊 בין אם אתם משתמשים בוואסטאפ לעסקים או לשימוש אישי, עם וואסטאפ ווב החיים קלים יותר </p>
</Wrapper>;

const seperator = <div> ----------------- </div>;

const Content = ({lang}) => {
  return (
    <Wrapper>
      {seperator}
      {lang === 'EN' ? engVersion : hebVersion}
    </Wrapper>);
};

export default Content;
