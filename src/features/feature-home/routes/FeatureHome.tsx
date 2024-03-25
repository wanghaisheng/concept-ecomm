import { TopHeader } from '@/components';
import Navbar from '@/components/ui/NavBar';

export const FeatureHome = () => (
  <div className="min-h-full min-w-full flex-col">
    <TopHeader />
    <div className="relative flex min-h-full min-w-full items-start">
      <Navbar />
    </div>
  </div>
);
