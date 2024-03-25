interface HomePageLayoutProps {
  children: React.ReactNode;
}

export const HomePageLayout = ({ children }: HomePageLayoutProps) => (
  <div className="flex h-screen w-screen items-center justify-center  bg-landing-background">
    <div className="bg-background-white/90 flex  h-[95%] w-[95%]  justify-center overflow-hidden rounded-3xl  bg-blend-luminosity shadow-lg backdrop-blur-lg backdrop-filter border-gradient-b-custom-gradient">
      {children}
    </div>
  </div>
);
