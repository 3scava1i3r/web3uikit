import React from 'react';

const reloadIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>reload icon</title>
        <path
            d="M21.7951 11.1753C21.6971 11.0809 21.501 10.9865 21.3049 10.9865L20.3246 11.0809C20.1285 7.30441 16.5992 4.09441 12.5798 4C12.1876 4 11.8935 4.28324 11.8935 4.66088C11.8935 5.22735 11.7955 6.07706 12.5798 6.07706C15.2267 6.07706 17.6776 8.24853 18.0697 10.7976C18.0697 10.8921 18.0697 10.9865 18.0697 11.1753L16.9914 11.2697C16.4031 11.2697 16.109 12.025 16.5992 12.3082L18.854 15.235C19.1481 15.4238 19.5403 15.4238 19.8344 15.235L21.8931 12.1194C22.0892 11.8362 21.9912 11.4585 21.7951 11.1753Z"
            fill={fill}
        />
        <path
            d="M11.9636 18.5838C11.9636 18.3006 11.6695 18.0174 11.2773 18.0174C10.6891 18.0174 10.199 17.9229 9.61075 17.7341C7.45397 17.0732 5.8854 15.0906 5.78737 12.9191H6.86576C7.45397 12.9191 7.74807 12.1638 7.2579 11.8806L5.10112 8.85942C4.80701 8.6706 4.41487 8.6706 4.12077 8.95383L2.16006 11.975C1.76792 12.3527 2.16006 13.1079 2.65023 13.0135L3.63059 12.9191C3.82666 15.7515 5.68933 18.395 8.43432 19.4335C9.02253 19.6224 9.51271 19.8112 10.1009 19.9056C10.4931 20 10.8852 20 11.2773 20C11.6695 20 11.9636 19.7168 11.9636 19.3391V18.5838Z"
            fill={fill}
        />
    </svg>
);
export default reloadIcon;
