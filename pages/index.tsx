import Layout from '@/components/Layout';
import { NextPage } from 'next';

const PAGE_TITLE = 'unofficial mfers';
const PAGE_DESC = 'unofficial mfers';

const HomePage: NextPage = () => {
	return (
		<Layout pageTitle={PAGE_TITLE} pageDesc={PAGE_DESC}>
			<h1 className="font-sartoshi text-[4rem] font-bold">gm mfers</h1>
			<p className="font-comic">
				you can state a roadmap that says where you will go, but you can also
				plant seeds and see where they grow
			</p>
		</Layout>
	);
};

export default HomePage;
