import { Branches } from '@/components';
import { db } from '@/firebase';
import { fetchData } from '@/services';
import { collection } from 'firebase/firestore';

const branchesCollectionRef = collection(db, 'branches');

const BranchesPage = async () => {
	const branches = await fetchData(branchesCollectionRef);

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
