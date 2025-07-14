export function TopArrowIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 500,0 900,350
				H 650
				v 650
				H 350
				V 350
				H 100
				Z
			"/>
		</svg>
	);
}

export function BackArrowIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 0,500 350,100
				v 250
				h 650
				V 650
				H 350
				v 250
				z
			"/>
		</svg>
	);
}

export function RootIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 387.35,50 181.33,950
				H 50
				L 257.3,50
				Z

				M 735,50 528.98,950
				H 397.65
				L 604.95,50
				Z
			"/>
			<path d="
				M 960,157.5
				V 371.32
				H 790
				V 157.5
				Z

				m 0,470.53
				V 842.5
				H 790
				V 628.03
				Z
			"/>
		</svg>
	);
}

export function HomeIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 500,0 0,530
				h 125
				v 470
				H 400
				V 740
				h 200
				v 260
				H 875
				V 530
				h 125
				z
			"/>
		</svg>
	);
}

export function DarkModeIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 500,205
				A 295,295 0 0 0 374.84,233.5 295,295 0 0 1 544.69,500 295,295 0 0 1 374.84,766.5 295,295 0 0 0 500,795 295,295 0 0 0 795,500 295,295 0 0 0 500,205
				Z
			"/>
		</svg>
	);
}

export function LightModeIcon({ width = 40, height = 40, fill = "#000000" }) {
	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 1000 1000">
			<path d="
				M 795,500
				A 295,295 0 0 1 500,795 295,295 0 0 1 205,500 295,295 0 0 1 500,205 295,295 0 0 1 795,500
				Z
			"/>
			<path d="
				m 455,0
				h 90
				v 160
				h -90
				z
			"/>
			<path d="
				m 455,840
				h 90
				v 160
				h -90
				z
			"/>
			<path d="
				m 1000,455
				v 90
				H 840
				v -90
				z
			"/>
			<path d="
				m 160,455
				v 90
				H 0
				v -90
				z
			"/>
			<path d="
				M 844.23,92.97 907.87,156.61 794.74,269.74 731.1,206.11
				Z
			"/>
			<path d="
				M 92.13,156.61 155.77,92.97 268.9,206.11 205.26,269.74
				Z
			"/>
			<path d="
				M 155.77,907.03 92.13,843.39 205.26,730.26 268.9,793.89
				Z
			"/>
			<path d="
				M 907.87,843.39 844.23,907.03 731.1,793.89 794.74,730.26
				Z
			"/>
		</svg>
	);
}