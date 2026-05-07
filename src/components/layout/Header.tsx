import poleLogo from '../../assets/images/icon-pole.png';

export const Header = () => {
  return (
    <header className="w-full py-8 flex justify-center items-center">
      <div className="flex items-center gap-2">
        <div
          className="w-10 h-10 bg-linear-to-tr from-brand-pink to-brand-purple shadow-glow transition-all duration-500 hover:rotate-12 hover:scale-110"
          style={{
            maskImage: `url(${poleLogo})`,
            WebkitMaskImage: `url(${poleLogo})`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
          }}
        />
        <span className="text-2xl font-bold tracking-tight">
          POLE ART <span className="text-brand-pink">CON</span>
        </span>
      </div>
    </header>
  );
};
