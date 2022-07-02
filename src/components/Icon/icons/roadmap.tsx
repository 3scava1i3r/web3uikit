import React from 'react';

const roadmapIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>Roadmap Icon</title>
        <path d="M17.61 11.07C17.67 10.96 17.71 10.83 17.71 10.7C17.71 10.57 17.68 10.44 17.61 10.33L16.34 8.06999L17.61 5.80999C17.67 5.69999 17.71 5.56999 17.71 5.44999C17.71 5.32999 17.68 5.19999 17.61 5.08999C17.55 4.97999 17.45 4.87999 17.34 4.81999C17.23 4.75999 17.1 4.71999 16.97 4.71999H13.17V3.93999C13.17 3.67999 13.1 3.41999 12.99 3.17999C12.88 2.93999 12.73 2.72999 12.54 2.54999C12.35 2.36999 12.12 2.22999 11.88 2.13999C11.63 2.04999 11.37 2.00999 11.11 2.00999H5.06C4.87 1.99999 4.68 2.07999 4.54 2.21999C4.4 2.35999 4.32 2.54999 4.32 2.73999V16.99C3.93 17.13 3.6 17.38 3.36 17.71C3.13 18.05 3 18.45 3 18.86V19.01C3 19.27 3.05 19.54 3.15 19.78C3.25 20.02 3.4 20.25 3.58 20.43C3.77 20.62 3.99 20.77 4.23 20.87C4.47 20.97 4.73 21.02 5 21.02H5.14C5.4 21.02 5.66 20.97 5.91 20.87C6.15 20.77 6.37 20.62 6.56 20.44C6.75 20.25 6.89 20.03 6.99 19.79C7.09 19.55 7.14 19.29 7.14 19.02V18.87C7.14 18.46 7.01 18.06 6.77 17.72C6.53 17.39 6.19 17.13 5.81 17V8.65999H8.92V9.50999C8.94 10.04 9.16 10.54 9.55 10.9C9.94 11.26 10.45 11.46 10.98 11.44H16.98C17.11 11.44 17.24 11.4 17.35 11.34C17.46 11.27 17.55 11.18 17.62 11.07H17.61ZM5.8 3.46999H11.11C11.25 3.45999 11.38 3.49999 11.49 3.57999C11.6 3.65999 11.67 3.78999 11.69 3.91999V7.31999C11.5 7.26999 11.3 7.23999 11.1 7.22999H5.8V3.46999ZM13.17 6.29999H15.72L14.87 7.77999C14.81 7.88999 14.78 8.01999 14.78 8.14999C14.78 8.27999 14.81 8.40999 14.87 8.51999L15.72 9.99999H13.17V6.29999ZM5.66 19.03C5.66 19.17 5.6 19.3 5.5 19.4C5.4 19.5 5.27 19.55 5.13 19.55H4.99C4.85 19.55 4.72 19.5 4.62 19.4C4.52 19.3 4.47 19.17 4.47 19.03V18.88C4.47 18.81 4.48 18.74 4.51 18.68C4.54 18.62 4.57 18.56 4.62 18.51C4.67 18.46 4.73 18.42 4.79 18.4C4.85 18.37 4.92 18.36 4.99 18.36H5.13C5.27 18.36 5.4 18.41 5.5 18.51C5.6 18.61 5.66 18.74 5.66 18.88V19.03ZM10.38 9.52999V8.67999H11.1C11.24 8.66999 11.37 8.70999 11.48 8.78999C11.59 8.86999 11.66 8.99999 11.68 9.12999V9.97999H10.96C10.82 9.98999 10.68 9.94999 10.57 9.85999C10.46 9.76999 10.39 9.63999 10.37 9.49999V9.51999L10.38 9.52999Z" />
        <path d="M12.73 16.19C12.65 16.17 12.57 16.17 12.49 16.19C12.43 16.21 12.38 16.25 12.33 16.29L12.24 16.35C12.24 16.35 12.24 16.4 12.24 16.43L12.13 16.59C12.09 16.68 12.08 16.78 12.07 16.87C12.1 17.13 12.07 17.39 11.99 17.64C11.91 17.89 11.79 18.12 11.62 18.32C11.38 18.54 11.07 18.66 10.75 18.67H9.18C8.98 18.67 8.8 18.75 8.66 18.89C8.52 19.03 8.44 19.22 8.44 19.41C8.44 19.6 8.52 19.79 8.66 19.93C8.8 20.07 8.99 20.15 9.18 20.15H10.77C11.46 20.15 12.12 19.88 12.63 19.4C12.95 19.07 13.2 18.67 13.36 18.23C13.52 17.8 13.58 17.33 13.55 16.87C13.55 16.77 13.53 16.68 13.5 16.59C13.46 16.5 13.41 16.42 13.34 16.35C13.28 16.28 13.21 16.23 13.14 16.19H12.73Z" />
        <path d="M12.98 14.33C12.92 14.4 12.87 14.49 12.84 14.58C12.81 14.67 12.8 14.77 12.81 14.86C12.81 14.96 12.85 15.05 12.89 15.13C12.94 15.21 13 15.29 13.07 15.35C13.18 15.44 13.32 15.5 13.46 15.52C13.61 15.53 13.75 15.51 13.88 15.44C14.01 15.37 14.11 15.27 14.18 15.14C14.25 15.01 14.28 14.87 14.26 14.72C14.25 14.57 14.19 14.44 14.1 14.32C14.01 14.21 13.88 14.12 13.74 14.08C13.6 14.04 13.45 14.04 13.31 14.08C13.17 14.12 13.05 14.21 12.96 14.32L12.98 14.33Z" />
        <path d="M15.14 12.86C14.97 12.91 14.83 13.02 14.74 13.17C14.65 13.32 14.61 13.5 14.64 13.67C14.67 13.84 14.75 14 14.89 14.12C15.02 14.24 15.19 14.3 15.37 14.3C15.44 14.31 15.51 14.31 15.59 14.3C15.69 14.28 15.78 14.23 15.86 14.17C15.94 14.11 16.01 14.03 16.06 13.95C16.11 13.86 16.14 13.77 16.15 13.67C16.16 13.57 16.15 13.47 16.12 13.37C16.09 13.27 16.04 13.18 15.98 13.11C15.91 13.03 15.83 12.97 15.74 12.93C15.65 12.89 15.55 12.86 15.45 12.86C15.35 12.86 15.25 12.87 15.15 12.91V12.88L15.14 12.86Z" />
        <path d="M19.77 11.7C19.6 11.6 19.4 11.58 19.21 11.63C19.02 11.68 18.86 11.81 18.76 11.98C18.66 12.15 18.64 12.35 18.69 12.54C18.74 12.73 18.87 12.89 19.04 12.99C19.15 13.05 19.28 13.08 19.4 13.08C19.53 13.08 19.66 13.05 19.77 12.98C19.88 12.91 19.97 12.82 20.04 12.71C20.09 12.63 20.12 12.53 20.13 12.44C20.14 12.34 20.13 12.25 20.11 12.15C20.08 12.06 20.04 11.97 19.98 11.89C19.92 11.81 19.85 11.75 19.76 11.7H19.77Z" />
        <path d="M17.47 12.69C17.37 12.7 17.28 12.73 17.2 12.78C17.12 12.83 17.04 12.89 16.98 12.97C16.92 13.05 16.88 13.14 16.85 13.23C16.83 13.32 16.82 13.42 16.83 13.52C16.85 13.7 16.94 13.86 17.07 13.97C17.2 14.09 17.37 14.15 17.55 14.15H17.65C17.84 14.12 18.02 14.02 18.13 13.87C18.25 13.72 18.3 13.52 18.28 13.33C18.27 13.23 18.24 13.14 18.19 13.06C18.14 12.98 18.08 12.9 18 12.84C17.92 12.78 17.84 12.74 17.74 12.71C17.65 12.69 17.55 12.68 17.45 12.69H17.47Z" />
        <path d="M20.35 9.69999C20.28 9.62999 20.2 9.57999 20.11 9.53999C19.98 9.47999 19.83 9.46999 19.69 9.49999C19.55 9.52999 19.42 9.59999 19.32 9.69999C19.25 9.76999 19.19 9.84999 19.15 9.93999C19.13 10.03 19.13 10.13 19.15 10.22C19.13 10.31 19.13 10.4 19.15 10.49C19.19 10.58 19.25 10.67 19.32 10.74C19.45 10.88 19.64 10.95 19.83 10.96C19.92 10.98 20.02 10.98 20.11 10.96C20.2 10.92 20.28 10.87 20.35 10.8C20.49 10.66 20.56 10.47 20.57 10.28C20.57 10.17 20.57 10.07 20.53 9.96999C20.49 9.86999 20.43 9.77999 20.36 9.70999L20.35 9.69999Z" />
    </svg>
);
export default roadmapIcon;
