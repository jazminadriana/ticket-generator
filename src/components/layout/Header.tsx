import poleArtLogo from '../../assets/images/pole-art-logo.svg';

export const Header = () => {
  return (
    <header className="w-full py-8 flex justify-center items-center">
      <div className="flex items-center gap-2">
        <img
          src={poleArtLogo}
          alt="Pole Art Logo"
          className="w-auto h-12 object-contain transition-all duration-500 hover:rotate-12 hover:scale-110"
        />
      </div>
    </header>
  );
};
