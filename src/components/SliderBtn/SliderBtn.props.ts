export interface SliderBtnProps {
	variant: 'prev' | 'next';
	color?: 'white' | undefined;
	className?: string;
	slidePrev?: () => void;
	slideNext?: () => void;
}
