const linuxIcon = (fill: string, size: number) => (
	<svg
		aria-hidden="true"
		data-testid="test-icon"
		fill="none"
		height={size}
		viewBox="0 0 24 24"
		width={size}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>linux icon</title>
    <path
      d="M11.8574 6.8409C11.8952 6.8409 11.9331 6.87994 11.971 6.87994C12.0089 6.87994 12.0846 6.87994 12.0846 6.8409C12.0846 6.80186 12.0089 6.76283 11.971 6.72379C11.8952 6.68475 11.8195 6.68475 11.7816 6.72379C11.7438 6.72379 11.7438 6.76283 11.7438 6.76283C11.7438 6.80186 11.8195 6.80186 11.8574 6.8409ZM11.0242 6.87994C11.0999 6.87994 11.0999 6.8409 11.1378 6.8409C11.2135 6.80186 11.2893 6.80186 11.2893 6.76283C11.2893 6.76283 11.2893 6.72379 11.2514 6.72379C11.2135 6.68475 11.1378 6.68475 11.062 6.72379C11.0242 6.76283 10.9106 6.80186 10.9484 6.8409C10.9484 6.87994 10.9863 6.91898 11.0242 6.87994ZM19.4319 17.772C19.2804 17.6158 19.2047 17.3425 19.1289 17.0302C19.0911 16.6789 18.9774 16.3666 18.7502 16.1323C18.7123 16.0933 18.6366 16.0542 18.5987 16.0152C18.5608 15.9762 18.4851 15.9762 18.4472 15.9371C18.7881 14.8831 18.6366 13.829 18.2957 12.853C17.8791 11.6818 17.1217 10.6668 16.5536 9.96407C15.8719 9.1052 15.2659 8.32441 15.2659 7.15322C15.3038 5.3574 15.4553 2.03904 12.3876 2C8.52458 2 9.50927 6.06011 9.43352 7.30938C9.39565 8.20729 9.20629 8.91 8.60033 9.80791C7.88074 10.7058 6.85818 12.1112 6.40371 13.5947C6.17647 14.2975 6.06286 15.0002 6.17647 15.6638C5.91136 15.8981 5.722 16.2494 5.53264 16.4837C5.38115 16.6398 5.15391 16.6789 4.8888 16.796C4.62369 16.8741 4.35859 17.0302 4.20709 17.3425C4.09348 17.4987 4.09348 17.6549 4.09348 17.8501C4.09348 18.0062 4.09348 18.1624 4.13135 18.3185C4.16922 18.6308 4.20709 18.9041 4.16922 19.0993C3.97986 19.6849 3.94199 20.0753 4.09348 20.3486C4.20709 20.6219 4.51008 20.778 4.85093 20.8171C5.49477 20.9732 6.36584 20.9342 7.08542 21.3246C7.84287 21.715 8.60033 21.8711 9.20629 21.715C9.62289 21.6369 10.0016 21.3636 10.191 20.9342C10.6454 20.9342 11.1757 20.739 12.0089 20.6609C12.577 20.6219 13.2965 20.8951 14.0919 20.8561C14.1297 20.9342 14.1676 21.0123 14.2055 21.0903C14.5085 21.754 15.0766 22.0663 15.7204 21.9882C16.3642 21.9492 17.0081 21.5588 17.5383 20.8951C18.0685 20.2705 18.9017 19.9972 19.4698 19.6459C19.7728 19.4897 20 19.2555 20 18.9432C20 18.6308 19.8485 18.2795 19.4319 17.772ZM11.971 5.43548C12.3497 4.57661 13.2587 4.57661 13.6374 5.39644C13.9025 5.98203 13.7889 6.60667 13.4859 6.99706C13.4102 6.95802 13.2587 6.87994 12.9936 6.80186C13.0314 6.76283 13.1072 6.68475 13.145 6.60667C13.3344 6.13819 13.145 5.5526 12.8042 5.5526C12.5391 5.51356 12.274 5.98203 12.3497 6.45051C12.1982 6.37243 12.0089 6.29435 11.8574 6.29435C11.8195 6.02107 11.8574 5.70876 11.971 5.43548ZM10.4561 4.96701C10.8348 4.96701 11.2135 5.51356 11.1757 6.29435C11.0242 6.33339 10.9106 6.37243 10.7591 6.45051C10.8348 6.09915 10.6454 5.66972 10.4182 5.70876C10.0774 5.70876 10.0395 6.52859 10.3425 6.80186C10.3803 6.8409 10.4182 6.80186 10.1152 6.99706C9.54714 6.45051 9.73651 4.96701 10.4561 4.96701ZM9.92587 7.34842C10.1531 7.15322 10.4561 6.95802 10.4561 6.91898C10.6454 6.76283 10.9863 6.37243 11.5165 6.37243C11.7816 6.37243 12.1225 6.48955 12.5012 6.72379C12.7284 6.87994 12.9178 6.91898 13.3344 7.07514C13.6753 7.2313 13.8646 7.46554 13.751 7.81689C13.6374 8.09017 13.3344 8.36345 12.8799 8.5196C12.4633 8.63672 12.1225 9.14424 11.4408 9.1052C11.2893 9.06616 11.1757 9.06616 11.062 9.02712C10.7591 8.87096 10.6076 8.59768 10.3046 8.44153C10.0016 8.24633 9.81225 8.01209 9.77438 7.81689C9.69863 7.6217 9.77438 7.46554 9.92587 7.34842ZM10.0395 20.3876C9.96374 21.754 8.37309 21.715 7.19904 21.0903C6.06286 20.4657 4.58582 20.8171 4.28284 20.2315C4.20709 20.0363 4.20709 19.724 4.39646 19.2164V19.1774C4.4722 18.9041 4.43433 18.5528 4.35859 18.2795C4.32071 17.9672 4.32071 17.6939 4.39646 17.4987C4.54795 17.2254 4.73731 17.1083 4.96455 17.0302C5.34327 16.9131 5.41902 16.9131 5.722 16.6398C5.91136 16.4446 6.06286 16.1323 6.25222 15.9371C6.44158 15.7419 6.63095 15.6248 6.93393 15.6638C7.23691 15.7419 7.50202 15.9371 7.76713 16.2885L8.48671 17.6939C8.86543 18.4747 10.1152 19.5678 10.0395 20.3876ZM10.0016 19.3726C9.85012 19.0993 9.62289 18.826 9.43352 18.5918C9.73651 18.5918 10.0016 18.5137 10.0774 18.2795C10.1531 18.0062 10.0774 17.6939 9.81225 17.3035C9.28203 16.5618 8.33522 16.0152 8.33522 16.0152C7.84287 15.7029 7.53989 15.2734 7.42627 14.844C7.27478 14.4146 7.31265 13.9461 7.42627 13.4776C7.61564 12.5797 8.10798 11.7208 8.44883 11.1743C8.52458 11.0962 8.48671 11.2914 8.10798 11.9941C7.805 12.6188 7.19904 14.0632 7.99436 15.1954C8.03223 14.3755 8.2216 13.5557 8.52458 12.814C8.97905 11.7208 9.96374 9.88599 10.0395 8.40249C10.0774 8.44153 10.191 8.5196 10.2667 8.55864C10.4182 8.67576 10.5697 8.83192 10.7212 8.94904C11.2135 9.33944 11.8195 9.3004 12.3497 8.98808C12.577 8.87096 12.7663 8.7148 12.9557 8.63672C13.3344 8.5196 13.5995 8.32441 13.7889 8.05113C14.0919 9.26136 14.7736 10.9791 15.1902 11.7989C15.4174 12.2674 15.8719 13.2044 16.0991 14.3365C16.2127 14.3365 16.3642 14.3365 16.5157 14.3755C17.0081 12.9701 16.0612 11.4866 15.6068 11.0572C15.4553 10.901 15.4174 10.8229 15.531 10.8229C15.9855 11.2524 16.6293 12.1112 16.8566 13.1263C16.9702 13.5557 16.9702 14.0242 16.8566 14.4927C17.5004 14.7659 18.22 15.1954 18.0306 15.859C17.9549 15.859 17.917 15.859 17.8791 15.859C17.9927 15.4686 17.7276 15.1954 17.0081 14.844C16.2506 14.5317 15.6446 14.5317 15.5689 15.3515C15.1144 15.5077 14.8493 15.8981 14.7357 16.4056C14.66 16.835 14.6221 17.3816 14.5842 17.9672C14.5463 18.2795 14.4327 18.6699 14.3191 19.0993C13.1072 19.9972 11.4029 20.3876 10.0016 19.3726ZM19.7349 18.9432C19.697 19.5678 18.1821 19.6849 17.3489 20.739C16.8566 21.3636 16.2506 21.6759 15.6825 21.754C15.1523 21.7931 14.6978 21.5588 14.4327 20.9732C14.2434 20.5438 14.3191 20.0753 14.4706 19.5678C14.6221 19.0212 14.8114 18.4356 14.8493 17.9672C14.8872 17.3816 14.8872 16.8741 15.0008 16.4837C15.1144 16.0542 15.2659 15.781 15.531 15.6638C15.531 15.6248 15.531 15.6248 15.5689 15.6248C15.5689 16.1323 15.834 16.6789 16.2506 16.796C16.7429 16.9131 17.4247 16.4837 17.7276 16.1323C18.0685 16.1323 18.3336 16.0933 18.5608 16.3275C18.9396 16.6789 18.8638 17.5377 19.2425 17.9672C19.6213 18.4356 19.7728 18.7089 19.7349 18.9432ZM10.0774 7.81689C10.1531 7.89497 10.2667 8.01209 10.3803 8.09017C10.6076 8.28537 10.9863 8.5196 11.4029 8.5196C11.8574 8.5196 12.274 8.28537 12.6148 8.09017C12.8042 7.97305 13.0314 7.81689 13.1829 7.69977C13.3344 7.54362 13.4102 7.4265 13.2965 7.4265C13.1829 7.4265 13.1829 7.54362 13.0693 7.6217C12.8799 7.73881 12.6906 7.93401 12.5391 8.01209C12.274 8.16825 11.7816 8.40249 11.4029 8.40249C11.0242 8.40249 10.6833 8.20729 10.4561 8.01209C10.3425 7.93401 10.2289 7.81689 10.1531 7.77785C10.1152 7.69977 10.1152 7.58266 10.0016 7.58266C9.96374 7.58266 9.92587 7.69977 10.0774 7.81689Z"
      fill={fill}
    />
	</svg>
);
export default linuxIcon;
