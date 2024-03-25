import { FeatureHome } from '@/features';
import { HomePageLayout } from '@/layouts';

const Home = () => <FeatureHome />;

Home.getLayout = (page: React.ReactElement) => <HomePageLayout>{page}</HomePageLayout>;
export default Home;
