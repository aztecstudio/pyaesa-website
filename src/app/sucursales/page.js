import { Branches } from '@/components';
import { getBranches } from '@/services';

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
