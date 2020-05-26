import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#EC0000" />
    <path d="M15.8948 10.8376C15.8708 10.2144 15.6911 9.6032 15.3795 9.05193L12.5632 4.18642C12.3475 3.81491 12.2037 3.41944 12.1198 3L12 3.20373C11.3049 4.41411 11.3049 5.90013 12 7.11052L14.253 11.0173C14.9481 12.2277 14.9481 13.7137 14.253 14.9241L14.1332 15.1278C14.0493 14.7084 13.9055 14.3129 13.6897 13.9534L11.6285 10.3702L10.3103 8.09321C10.0945 7.7217 9.95073 7.32623 9.86684 6.91878L9.747 7.1225C9.05193 8.32091 9.05193 9.80692 9.73502 11.0173L12 14.9241C12.6951 16.1345 12.6951 17.6205 12 18.8309L11.8802 19.0346C11.7963 18.6152 11.6405 18.2197 11.4368 17.8602L8.62051 12.9707C8.249 12.3236 8.06924 11.5925 8.10519 10.8495C5.08522 11.6285 3 13.3063 3 15.2477C3 17.9441 7.02663 20.1252 12 20.1252C16.9734 20.1252 21 17.9441 21 15.2477C21 13.3063 18.9148 11.6285 15.8948 10.8376Z" fill="white" />
  </g>
);

const mono = (
  <g>
    <path d="M24 0H0V24H24V0ZM15.3795 9.05193C15.6911 9.6032 15.8708 10.2144 15.8948 10.8376C18.9148 11.6285 21 13.3063 21 15.2477C21 17.9441 16.9734 20.1252 12 20.1252C7.02663 20.1252 3 17.9441 3 15.2477C3 13.3063 5.08522 11.6285 8.10519 10.8495C8.06924 11.5925 8.249 12.3236 8.62051 12.9707L11.4368 17.8602C11.6405 18.2197 11.7963 18.6152 11.8802 19.0346L12 18.8309C12.6951 17.6205 12.6951 16.1345 12 14.9241L9.73502 11.0173C9.05193 9.80692 9.05193 8.32091 9.747 7.1225L9.86684 6.91878C9.95073 7.32623 10.0945 7.7217 10.3103 8.09321L11.6285 10.3702L13.6897 13.9534C13.9055 14.3129 14.0493 14.7084 14.1332 15.1278L14.253 14.9241C14.9481 13.7137 14.9481 12.2277 14.253 11.0173L12 7.11052C11.3049 5.90013 11.3049 4.41411 12 3.20373L12.1198 3C12.2037 3.41944 12.3475 3.81491 12.5632 4.18642L15.3795 9.05193Z" />
  </g>
);

const Santander = {
  bankName: 'santander',
  bankId: 33,
  ariaTitle: 'Santander',
  svg: {
    original,
    mono,
  },
};

export default Santander;
