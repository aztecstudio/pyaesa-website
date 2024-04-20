'use client';
import { BranchesGrid, BranchesMap, ToggleView } from '@/components';
import { useState } from 'react';

const BranchesPage = () => {
	const [isGrid, setIsGrid] = useState(true);

	return (
		<section>
			<h2>
				Encuentra <span>la sucursal más cercana</span>
			</h2>
			<ToggleView setIsGrid={setIsGrid} />
			{isGrid ? <BranchesGrid /> : <BranchesMap />}
		</section>
	);
};

export default BranchesPage;
