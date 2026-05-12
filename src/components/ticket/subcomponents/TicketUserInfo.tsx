import poleLogo from '../../../assets/images/icon-pole.png';
import imageAvatar from '../../../assets/images/image-avatar.jpg';
import iconIg from '../../../assets/images/icon-ig.svg';

export const TicketUserInfo = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 bg-linear-to-tr from-brand-pink to-brand-purple shadow-glow"
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
      </div>
      <p className="font-medium opacity-80">May 12, 2026 / Austin, TX</p>

      <div className="flex items-center gap-4">
        <img
          src={imageAvatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center leading-tight">
          <p className="text-xl font-bold text-white tracking-tight">
            Jazmín Hernández
          </p>
          <div className="flex items-center gap-2">
            <img
              src={iconIg}
              alt="Instagram Logo"
              className="w-5 h-5 brightness-200"
            />
            <span className="text-sm font-mono">@jazmin_hernandez</span>
          </div>
        </div>
      </div>
    </div>
  );
};
