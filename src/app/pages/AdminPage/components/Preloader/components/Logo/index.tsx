import React from 'react';

import CustomSvg from './CustomSvg';

const Logo: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<svg width="0" height="0" className="hidden">
				<symbol
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-6 0 58 26"
					id="Vector"
				>
					<path
						id="path"
						d="M44.387 7.255L41 9.245a5.38 5.38 0 01.7 2.375v.21a5.18
						5.18 0 01-.473 2.125c-1.892 4.116-9.12 7.198-17.747 7.198a32.52
						32.52 0 01-3.065-.134c-3.349-.287-6.376-1.053-8.836-2.125L40.262
						3.982C35.986 1.532 29.988 0 23.328 0 10.444 0 0 5.705 0 12.73c0
						3.043 1.949 5.838 5.222 8.02.284.192.587.384.89.556.378.23.756.44
						1.153.65a28.417 28.417 0 004.295 1.762c.757.248 1.552.46
						2.365.65l.454.115c2.763.632 5.771.977 8.95.977 2.497 0 4.9-.21
						7.151-.613 4.409-.766 8.23-2.24 11.069-4.173a.975.975 0
						00.151-.115c1.04-.727 1.949-1.512
						2.687-2.354.283-.326.53-.651.776-.977a8.4 8.4 0 001.286-2.737 6.92
						6.92 0 00.227-1.761c0-.134
						0-.287-.019-.421-.019-.23-.038-.479-.075-.709a7.558 7.558 0
						00-.133-.631c-.246-.957-.681-1.876-1.286-2.757-.265-.325-.511-.65-.776-.957zM7.265
						16.1c-1.305-1.284-2.043-2.74-2.043-4.29v-.21c.227-5.054 8.287-9.132
						18.22-9.132 3.595 0 6.944.536 9.782 1.455v.02L7.265 16.098z"
						fill="#3f51b5"
						stroke="#fafafa"
						strokeDasharray="418"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="11px"
					>
						<animate
							id="p1"
							attributeName="stroke-dashoffset"
							begin="0s"
							values="300; 500"
							dur="2s"
							repeatCount="indefinite"
							fill="freeze"
							calcMode="liner"
						/>
					</path>
				</symbol>
			</svg>
			<CustomSvg className="icon">
				<use xlinkHref="#Vector" />
			</CustomSvg>
		</React.Fragment>
	);
};

export default Logo;
