import React from 'react';

const original = (
  <g>
    <path d="M0 0H23V24H0V0Z" fill="#ECECEC" />
    <path d="M18 17.7302C17.55 17.7302 17.1 17.6186 16.725 17.4325V19.9256H18.8625C19.95 19.9256 20.8125 19.0698 20.8125 17.9907V16.1302C20.2125 17.0977 19.2 17.7302 18 17.7302Z" fill="#3F3F40" />
    <path d="M14.5125 16.4279V11.814C13.875 12.6698 13.0125 13.8233 12.7875 14.1209C13.0125 14.4186 13.8375 15.5349 14.5125 16.4279Z" fill="#3F3F40" />
    <path d="M18.8625 4H4.95C3.8625 4 3 4.85581 3 5.93488V17.9907C3 19.0698 3.8625 19.9256 4.95 19.9256H14.5125V17.6186H12.75C12.75 17.6186 11.8875 16.4651 11.5125 15.907C11.1 16.4651 10.275 17.6186 10.275 17.6186H7.65C7.65 17.6186 9.9 14.6047 10.2375 14.1209C9.9 13.6372 7.8 10.8093 7.8 10.8093H10.425C10.425 10.8093 11.175 11.814 11.55 12.3349C11.925 11.814 12.675 10.8093 12.675 10.8093H15.75C15.75 10.8093 15.975 11.2186 16.05 11.4047C16.6125 10.9581 17.325 10.6977 18.0375 10.6977C19.2 10.6977 20.25 11.3302 20.85 12.2977V5.93488C20.8125 4.85581 19.95 4 18.8625 4V4Z" fill="#3F3F40" />
    <path d="M19.0875 14.2326C19.0875 13.4512 18.5625 12.8186 17.925 12.8186C17.25 12.8186 16.725 13.4512 16.725 14.2326C16.725 15.014 17.25 15.6465 17.925 15.6465C18.5625 15.6465 19.0875 15.014 19.0875 14.2326Z" fill="#3F3F40" />
  </g>
);

const mono = (
  <g>
    <path d="M24 0H0V24H24V0ZM4.95 4H18.8625C19.95 4 20.8125 4.85581 20.85 5.93488V12.2977C20.25 11.3302 19.2 10.6977 18.0375 10.6977C17.325 10.6977 16.6125 10.9581 16.05 11.4046C15.975 11.2186 15.75 10.8093 15.75 10.8093H12.675C12.675 10.8093 11.925 11.814 11.55 12.3349C11.175 11.814 10.425 10.8093 10.425 10.8093H7.8C7.8 10.8093 9.9 13.6372 10.2375 14.1209C9.9 14.6047 7.65 17.6186 7.65 17.6186H10.275C10.275 17.6186 11.1 16.4651 11.5125 15.907C11.8875 16.4651 12.75 17.6186 12.75 17.6186H14.5125V19.9256H4.95C3.8625 19.9256 3 19.0698 3 17.9907V5.93488C3 4.85581 3.8625 4 4.95 4ZM14.5125 11.814C13.875 12.6698 13.0125 13.8233 12.7875 14.1209C12.8698 14.2299 13.0326 14.4485 13.239 14.7258C13.5964 15.2059 14.0846 15.8618 14.5125 16.4279V11.814ZM18 17.7302C17.55 17.7302 17.1 17.6186 16.725 17.4325V19.9256H18.8625C19.95 19.9256 20.8125 19.0698 20.8125 17.9907V16.1302C20.2125 17.0977 19.2 17.7302 18 17.7302ZM19.0875 14.2326C19.0875 13.4512 18.5625 12.8186 17.925 12.8186C17.25 12.8186 16.725 13.4512 16.725 14.2326C16.725 15.014 17.25 15.6465 17.925 15.6465C18.5625 15.6465 19.0875 15.014 19.0875 14.2326Z"fillRule="evenodd" clipRule="evenodd" />
  </g>
);

const XP = {
  bankName: 'xp',
  bankId: 102,
  ariaTitle: 'Banco XP',
  svg: {
    original,
    mono,
  },
};

export default XP;
