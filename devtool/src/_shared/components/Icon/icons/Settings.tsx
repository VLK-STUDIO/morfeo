import React from 'react';
import { IconProps } from './props';

export const Settings: React.FC<IconProps> = props => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M37.8349 46.4497C42.9655 46.4497 47.1248 42.2904 47.1248 37.1597C47.1248 32.0291 42.9655 27.8698 37.8349 27.8698C32.7042 27.8698 28.5449 32.0291 28.5449 37.1597C28.5449 42.2904 32.7042 46.4497 37.8349 46.4497Z"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.7502 46.4497C60.338 47.3837 60.2151 48.4197 60.3972 49.4243C60.5793 50.4288 61.0582 51.3558 61.7721 52.0856L61.9579 52.2714C62.5338 52.8466 62.9906 53.5296 63.3022 54.2815C63.6139 55.0333 63.7743 55.8392 63.7743 56.6531C63.7743 57.467 63.6139 58.2729 63.3022 59.0248C62.9906 59.7766 62.5338 60.4597 61.9579 61.0349C61.3827 61.6107 60.6997 62.0675 59.9478 62.3792C59.196 62.6909 58.3901 62.8513 57.5762 62.8513C56.7623 62.8513 55.9564 62.6909 55.2045 62.3792C54.4527 62.0675 53.7696 61.6107 53.1944 61.0349L53.0086 60.8491C52.2788 60.1352 51.3519 59.6563 50.3473 59.4741C49.3428 59.292 48.3067 59.415 47.3727 59.8272C46.4568 60.2197 45.6757 60.8715 45.1255 61.7023C44.5753 62.5331 44.2801 63.5067 44.2761 64.5031V65.0295C44.2761 66.6721 43.6236 68.2474 42.4621 69.4089C41.3006 70.5703 39.7254 71.2228 38.0828 71.2228C36.4402 71.2228 34.8649 70.5703 33.7035 69.4089C32.542 68.2474 31.8895 66.6721 31.8895 65.0295V64.7508C31.8655 63.7259 31.5338 62.7318 30.9373 61.8979C30.3409 61.064 29.5074 60.4288 28.5451 60.0749C27.6111 59.6627 26.5751 59.5397 25.5705 59.7219C24.566 59.904 23.6391 60.3829 22.9092 61.0968L22.7234 61.2826C22.1482 61.8584 21.4652 62.3152 20.7133 62.6269C19.9615 62.9386 19.1556 63.099 18.3417 63.099C17.5278 63.099 16.7219 62.9386 15.97 62.6269C15.2182 62.3152 14.5351 61.8584 13.9599 61.2826C13.3841 60.7074 12.9273 60.0244 12.6156 59.2725C12.3039 58.5207 12.1435 57.7147 12.1435 56.9008C12.1435 56.087 12.3039 55.281 12.6156 54.5292C12.9273 53.7773 13.3841 53.0943 13.9599 52.5191L14.1457 52.3333C14.8596 51.6035 15.3385 50.6765 15.5207 49.672C15.7028 48.6675 15.5798 47.6314 15.1676 46.6974C14.7751 45.7815 14.1233 45.0004 13.2925 44.4502C12.4617 43.9 11.4882 43.6047 10.4917 43.6008H9.96526C8.3227 43.6008 6.74741 42.9483 5.58595 41.7868C4.42448 40.6253 3.77197 39.05 3.77197 37.4075C3.77197 35.7649 4.42448 34.1896 5.58595 33.0282C6.74741 31.8667 8.3227 31.2142 9.96526 31.2142H10.244C11.2689 31.1902 12.263 30.8584 13.0969 30.262C13.9308 29.6656 14.566 28.832 14.9199 27.8698C15.3321 26.9358 15.4551 25.8997 15.2729 24.8952C15.0908 23.8907 14.6119 22.9637 13.898 22.2339L13.7122 22.0481C13.1364 21.4729 12.6796 20.7899 12.3679 20.038C12.0562 19.2862 11.8958 18.4803 11.8958 17.6664C11.8958 16.8525 12.0562 16.0466 12.3679 15.2947C12.6796 14.5428 13.1364 13.8598 13.7122 13.2846C14.2874 12.7088 14.9704 12.252 15.7223 11.9403C16.4741 11.6286 17.2801 11.4682 18.094 11.4682C18.9078 11.4682 19.7138 11.6286 20.4656 11.9403C21.2175 12.252 21.9005 12.7088 22.4757 13.2846L22.6615 13.4704C23.3913 14.1843 24.3183 14.6632 25.3228 14.8453C26.3273 15.0275 27.3634 14.9045 28.2974 14.4923H28.5451C29.461 14.0998 30.2421 13.448 30.7923 12.6172C31.3425 11.7864 31.6378 10.8128 31.6418 9.81637V9.28994C31.6418 7.64738 32.2943 6.07209 33.4557 4.91062C34.6172 3.74915 36.1925 3.09665 37.8351 3.09665C39.4776 3.09665 41.0529 3.74915 42.2144 4.91062C43.3758 6.07209 44.0284 7.64738 44.0284 9.28994V9.56864C44.0323 10.5651 44.3276 11.5386 44.8778 12.3694C45.428 13.2002 46.2091 13.852 47.125 14.2446C48.059 14.6568 49.0951 14.7797 50.0996 14.5976C51.1041 14.4155 52.0311 13.9366 52.7609 13.2227L52.9467 13.0369C53.5219 12.461 54.2049 12.0042 54.9568 11.6926C55.7086 11.3809 56.5145 11.2205 57.3284 11.2205C58.1423 11.2205 58.9482 11.3809 59.7001 11.6926C60.452 12.0042 61.135 12.461 61.7102 13.0369C62.286 13.6121 62.7428 14.2951 63.0545 15.047C63.3662 15.7988 63.5266 16.6047 63.5266 17.4186C63.5266 18.2325 63.3662 19.0384 63.0545 19.7903C62.7428 20.5421 62.286 21.2252 61.7102 21.8004L61.5244 21.9862C60.8105 22.716 60.3316 23.6429 60.1495 24.6475C59.9673 25.652 60.0903 26.6881 60.5025 27.6221V27.8698C60.895 28.7857 61.5468 29.5668 62.3776 30.117C63.2084 30.6672 64.182 30.9625 65.1784 30.9665H65.7049C67.3474 30.9665 68.9227 31.619 70.0842 32.7804C71.2456 33.9419 71.8982 35.5172 71.8982 37.1597C71.8982 38.8023 71.2456 40.3776 70.0842 41.5391C68.9227 42.7005 67.3474 43.353 65.7049 43.353H65.4262C64.4297 43.357 63.4562 43.6523 62.6254 44.2025C61.7946 44.7527 61.1428 45.5338 60.7502 46.4497V46.4497Z"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    {/* <defs>
      <clipPath id="clip0">
        <rect
          width="74.3195"
          height="74.3195"
          fill="white"
          transform="translate(0.675293)"
        />
      </clipPath>
    </defs> */}
  </svg>
);
