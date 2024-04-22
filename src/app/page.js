import {
	BranchesCard,
	ContactCard,
	MainProducts,
	Overview,
} from '@/components';

export default function Home() {
	return (
		<>
			<Overview />
			<MainProducts />
			<BranchesCard />
			<ContactCard />
		</>
	);
}
