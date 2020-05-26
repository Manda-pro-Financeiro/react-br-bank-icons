import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#FDE100" />
    <path d="M3 9.00004L6.74648 11.5L11.2465 8.50004L9.37324 7.24652L11.8099 5.6268L17.0563 9.1268L8.43662 14.8733L10.3099 16.1268L21 9.00004L12 3L3 9.00004ZM21 15L17.2465 12.5L12.7465 15.5L14.6197 16.7465L12.1831 18.3733L6.93662 14.8733L15.5563 9.1268L13.6831 7.87328L3 15L12 21L21 15ZM21 5.5L19.1197 6.75357L17.2465 5.5L21 3V5.5ZM3 18.5L4.87324 17.2465L6.74648 18.5L3 21V18.5Z" fillRule="evenodd" fill="#003882" />
  </g>
);

const mono = (
  <g>
    <path
      d="M24 0H0V24H24V0ZM6.74648 11.5L3 9.00004L12 3L21 9.00004L10.3099 16.1268L8.43662 14.8733L17.0563 9.1268L11.8099 5.6268L9.37324 7.24652L11.2465 8.50004L6.74648 11.5ZM17.2465 12.5L21 15L12 21L3 15L13.6831 7.87328L15.5563 9.1268L6.93662 14.8733L12.1831 18.3733L14.6197 16.7465L12.7465 15.5L17.2465 12.5ZM19.1197 6.75356L21 5.5V3L17.2465 5.5L19.1197 6.75356ZM4.87324 17.2465L3 18.5V21L6.74648 18.5L4.87324 17.2465Z"
      fillRule="evenodd"
    />
  </g>
);

const BB = {
  bankName: 'bb',
  bankId: 1,
  ariaTitle: 'Banco do Brasil',
  svg: {
    original,
    mono,
  },
};

export default BB;