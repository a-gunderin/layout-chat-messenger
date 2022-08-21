module.exports = {
	breakPoints: {
		xxs: '@media (max-width:413px)',
		xs: '@media (min-width:413px)',
		sm: '@media (min-width:576px)',
		md: '@media (min-width:768px)',
		lg: '@media (min-width:992px)',
		xl: '@media (min-width:1200px)',
		xxl: '@media (min-width:1600px)',
	},
	custom: {
		// FONTS
		defaultFont: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

		// BACKGROUND IMAGES & GRADIENTS

		// COLORS
		grayColor: '#efefef',
		primaryColor: '#4545a5',
		secondaryColor: '#6c757d',
		successColor: '#28a745',
		infoColor: '#17a2b8',
		warningColor: '#ffc107',
		dangerColor: '#dc3545',
		lightColor: '#fbfbfb',
		darkColor: '#343a40',
		black50: 'rgba(0, 0, 0, 0.5)',
		msgTimeColor1: 'rgba(108, 117, 125, 0.6)',
		msgTimeColor2: 'rgba(255, 255, 255, 0.6)',

		// OTHER VALUES
		bodyHeightXl: 'calc(100vh - 3rem)',
		chatListMobileHeight: 'calc(100vh - 18rem)',
		defBorder: '1px solid #efefef',
		myMsgBorder: '1px solid rgba(239, 239, 239, 0.6)',
		defOutline: '1px dashed #6c757d',
		shadowSm: '0px 2px 2px rgba(0, 0, 0, 0.08)',

		// TRANSITION PROPERTIES
		trsBdbc: 'border-bottom-color',
		trsBgc: 'background-color',
		trsC: 'color',
	},
};
