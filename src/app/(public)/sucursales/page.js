import { Branches } from '@/components';
import { getBranches } from '@/services/database';

export const metadata = {
	title: 'PYAESA - Sucursales',
	description: 'Encuentra aquí la sucursal más cercana',
};

const BranchesPage = async () => {
	const branches = await getBranches();

	return (
		<section>
			<h2>
				Encuentra <span>la sucursal más cercana</span>
			</h2>
			<Branches branches={branches} />
		</section>
	);
};

export default BranchesPage;
