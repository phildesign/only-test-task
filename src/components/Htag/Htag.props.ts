import { ReactNode } from 'react';

export interface HtagProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	className?: string;
	withBorder?: boolean;
	children: ReactNode;
}
