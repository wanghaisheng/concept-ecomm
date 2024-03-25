import { TopHeader } from '@/components';
import Navbar from '@/components/ui/NavBar';

import DescriptionTablet from '../components/DescriptionTablet';

export const FeatureHome = () => (
  <div className="min-h-full min-w-full flex-col">
    <TopHeader />
    <div className="relative flex h-full min-w-full items-start justify-center   pt-[40px]">
      <Navbar />
      <div className="flex h-[calc(100%-40px)] w-full max-w-[1072px] flex-col">
        <div className="h-[72%]">Image</div>
        <div className="flex justify-center  pt-s12">
          <DescriptionTablet />
        </div>
      </div>
    </div>
  </div>
);
