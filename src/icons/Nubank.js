import React from 'react';

const original = (
  <g>
    <path d="M0 0H24V24H0V0Z" fill="#8A05BE" />
    <path d="M18.5519 14.6043C18.5519 15.0486 18.032 15.5946 17.6091 15.5946H17.2242C17.2246 12.8758 17.2246 9.82772 17.2242 9.28666C17.2241 9.27065 17.227 9.25475 17.2329 9.2399C17.2387 9.22504 17.2474 9.21151 17.2584 9.20008C17.2695 9.18865 17.2826 9.17955 17.297 9.17329C17.3115 9.16704 17.327 9.16375 17.3427 9.16362H18.4328C18.4983 9.16362 18.5519 9.21966 18.5519 9.28766V14.6043ZM16.7755 16.5487C16.7755 16.8299 16.6406 17.301 15.7365 17.301C13.9846 17.301 12.9092 15.9016 12.9092 14.8978C12.9092 14.8978 12.9073 11.6525 12.9073 9.28766C12.9071 9.27162 12.91 9.2557 12.9159 9.24082C12.9218 9.22594 12.9305 9.21239 12.9415 9.20095C12.9525 9.18951 12.9657 9.18041 12.9802 9.17418C12.9947 9.16794 13.0103 9.16469 13.026 9.16461H14.1174C14.1829 9.16461 14.2367 9.22025 14.2367 9.28866V14.5032C14.2367 15.3647 14.9054 16.0635 15.7299 16.0635H16.7761L16.7755 16.5487ZM18.5155 8.69595H17.2598C16.9928 8.69595 16.7753 8.9233 16.7753 9.20231V15.5952H15.7291C15.1519 15.5952 14.684 15.1062 14.684 14.5032V9.20231C14.684 8.92271 14.4669 8.69575 14.1994 8.69575H12.9431C12.6755 8.69575 12.4584 8.92271 12.458 9.20231C12.4574 11.5137 12.4599 14.898 12.4599 14.898C12.4601 16.6769 14.3681 17.7692 15.7361 17.7692C16.6537 17.7692 17.2236 17.3006 17.2236 16.5455V16.0635H17.6089C18.2849 16.0635 19 15.3136 19 14.6043V9.20231C19.0006 8.92271 18.7835 8.69575 18.5155 8.69575V8.69595ZM11.0939 15.4816C11.0941 15.4976 11.0911 15.5135 11.0852 15.5283C11.0793 15.5432 11.0706 15.5567 11.0596 15.5682C11.0486 15.5796 11.0354 15.5886 11.0209 15.5949C11.0065 15.6011 10.9909 15.6043 10.9752 15.6044H9.88377C9.85189 15.604 9.82145 15.5907 9.7991 15.5675C9.77676 15.5443 9.7643 15.5131 9.76446 15.4806V10.2661C9.76446 9.40453 9.09553 8.70573 8.2713 8.70573H7.22507V8.22051C7.22507 7.93992 7.36003 7.46826 8.26406 7.46826C10.016 7.46826 11.0918 8.86766 11.0918 9.8714C11.0918 9.8714 11.0937 13.1325 11.0937 15.4816H11.0939ZM5.56722 15.6054C5.53533 15.6049 5.50493 15.5916 5.48268 15.5683C5.46042 15.545 5.44813 15.5137 5.4485 15.4812V10.1656C5.4485 9.72123 5.96838 9.17439 6.39106 9.17439H6.77638C6.7758 13.0679 6.7758 15.0602 6.77638 15.481C6.77669 15.5135 6.76435 15.5448 6.74206 15.568C6.71977 15.5913 6.68935 15.6046 6.65746 15.605H5.56742L5.56722 15.6054ZM11.5397 9.8714C11.5399 8.09228 9.63185 7 8.26406 7C7.34634 7 6.77638 7.46866 6.77638 8.2237V8.70573H6.39126C5.71509 8.70573 5 9.45558 5 10.165V15.5669C5 15.8465 5.21711 16.0735 5.48448 16.0735H6.74C6.74782 16.0735 6.75447 16.0713 6.7623 16.0713C7.01892 16.0587 7.22449 15.8383 7.22449 15.5669V9.17399H8.27091C8.84791 9.17399 9.31597 9.66299 9.31597 10.2661V15.5669C9.31597 15.8465 9.53308 16.0735 9.80045 16.0735H11.0569C11.3245 16.0735 11.5414 15.8471 11.5414 15.5669C11.5424 13.2124 11.5399 9.8712 11.5399 9.8712L11.5397 9.8714Z" fill="white" />
  </g>
);

const mono = (
  <g>
    <path d="M24 0H0V24H24V0ZM17.6091 15.5946C18.0319 15.5946 18.5518 15.0486 18.5518 14.6043V9.28766C18.5518 9.21966 18.4982 9.16362 18.4327 9.16362H17.3427C17.327 9.16375 17.3114 9.16704 17.297 9.17329C17.2825 9.17955 17.2694 9.18865 17.2584 9.20008C17.2474 9.21151 17.2387 9.22504 17.2328 9.2399C17.2269 9.25475 17.224 9.27065 17.2241 9.28666C17.2245 9.82772 17.2245 12.8758 17.2241 15.5946H17.6091ZM15.7365 17.301C16.6405 17.301 16.7755 16.8299 16.7755 16.5487L16.776 16.0635H15.7298C14.9054 16.0635 14.2366 15.3647 14.2366 14.5032V9.28866C14.2366 9.22025 14.1829 9.16461 14.1173 9.16461H13.0259C13.0102 9.16469 12.9946 9.16794 12.9801 9.17418C12.9656 9.18041 12.9525 9.18951 12.9415 9.20095C12.9304 9.21239 12.9217 9.22593 12.9158 9.24082C12.91 9.2557 12.907 9.27162 12.9072 9.28766C12.9072 11.6525 12.9092 14.8978 12.9092 14.8978C12.9092 15.9016 13.9845 17.301 15.7365 17.301ZM17.2597 8.69595H18.5155V8.69575C18.7834 8.69575 19.0005 8.92271 18.9999 9.20231V14.6043C18.9999 15.3136 18.2848 16.0635 17.6089 16.0635H17.2236V16.5455C17.2236 17.3006 16.6536 17.7692 15.7361 17.7692C14.3681 17.7692 12.4601 16.6769 12.4599 14.898C12.4599 14.898 12.4573 11.5137 12.4579 9.20231C12.4583 8.92271 12.6754 8.69575 12.943 8.69575H14.1993C14.4669 8.69575 14.684 8.92271 14.684 9.20231V14.5032C14.684 15.1062 15.1518 15.5952 15.729 15.5952H16.7753V9.20231C16.7753 8.9233 16.9928 8.69595 17.2597 8.69595ZM11.0852 15.5283C11.0911 15.5135 11.094 15.4976 11.0939 15.4816H11.0937C11.0937 13.1325 11.0917 9.8714 11.0917 9.8714C11.0917 8.86766 10.0159 7.46826 8.264 7.46826C7.35997 7.46826 7.22501 7.93992 7.22501 8.22051V8.70573H8.27124C9.09547 8.70573 9.7644 9.40453 9.7644 10.2661V15.4806C9.76424 15.5131 9.7767 15.5443 9.79904 15.5675C9.82139 15.5907 9.85183 15.604 9.88371 15.6044H10.9751C10.9908 15.6043 11.0064 15.6011 11.0209 15.5949C11.0354 15.5886 11.0485 15.5796 11.0595 15.5682C11.0706 15.5567 11.0793 15.5432 11.0852 15.5283ZM5.48262 15.5683C5.50487 15.5916 5.53527 15.6049 5.56716 15.6054L5.56736 15.605H6.6574C6.68929 15.6046 6.71971 15.5913 6.742 15.568C6.76429 15.5448 6.77663 15.5135 6.77632 15.481C6.77573 15.0602 6.77573 13.0679 6.77632 9.17439H6.391C5.96832 9.17439 5.44843 9.72122 5.44843 10.1656V15.4812C5.44807 15.5137 5.46036 15.545 5.48262 15.5683ZM8.264 7C9.63179 7 11.5398 8.09228 11.5396 9.8714L11.5398 9.87119C11.5398 9.87119 11.5424 13.2124 11.5414 15.5669C11.5414 15.8471 11.3245 16.0735 11.0569 16.0735H9.80039C9.53301 16.0735 9.3159 15.8465 9.3159 15.5669V10.2661C9.3159 9.66299 8.84785 9.17399 8.27085 9.17399H7.22442V15.5669C7.22442 15.8383 7.01886 16.0587 6.76224 16.0713C6.75832 16.0713 6.75471 16.0718 6.75109 16.0724C6.74747 16.0729 6.74385 16.0735 6.73994 16.0735H5.48442C5.21705 16.0735 4.99994 15.8465 4.99994 15.5669V10.165C4.99994 9.45558 5.71503 8.70573 6.3912 8.70573H6.77632V8.2237C6.77632 7.46866 7.34628 7 8.264 7Z" fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const Nubank = {
  bankName: 'nubank',
  bankId: 260,
  ariaTitle: 'Nubank',
  svg: {
    original,
    mono,
  },
};

export default Nubank;