import { Header } from './Header';
import bgMobile from '../../assets/images/background-mobile.png';
import bgTablet from '../../assets/images/background-tablet.png';
import bgDesktop from '../../assets/images/background-desktop.png';
import squigglyTop from '../../assets/images/pattern-squiggly-line-top.svg';
import squigglyMobileBottom from '../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import squigglyDesktopBottom from '../../assets/images/pattern-squiggly-line-bottom-desktop.svg';
import linesTop from '../../assets/images/pattern-lines.svg';
import patternCircle from '../../assets/images/pattern-circle.svg';

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main
      className="
        display-grid
        min-h-screen w-full
        bg-cover bg-[length:100%_100%] bg-no-repeat
        py-8 px-4
        bg-fixed
        bg-[image:var(--bg-image-mobile)]
        md:bg-[image:var(--bg-image-tablet)]
        lg:bg-[image:var(--bg-image-desktop)]
        relative overflow-x-hidden
        flex flex-col items-center
      "
      style={
        {
          '--bg-image-mobile': `url(${bgMobile})`,
          '--bg-image-tablet': `url(${bgTablet})`,
          '--bg-image-desktop': `url(${bgDesktop})`,
        } as React.CSSProperties
      }
    >
      <img
        src={squigglyTop}
        alt=""
        className="absolute top-4 right-30 h-[52px] md:h-[100px] lg:h-[200px] pointer-events-none"
      />

      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-0"
        style={{
          height: '350px',
          backgroundImage: `url(${linesTop})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'top center',
          backgroundSize: 'auto',
        }}
      />

      <img
        src={patternCircle}
        alt=""
        className="absolute -top-[30px] -left-4 h-[150px] md:h-[200px] lg:h-[300px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[600px] mx-auto">
        <Header />
        {children}
      </div>

      <img
        src={squigglyMobileBottom}
        alt=""
        className="absolute left-0 bottom-0 h-[200px] pointer-events-none lg:hidden"
      />
      <img
        src={squigglyDesktopBottom}
        alt=""
        className="hidden lg:block absolute left-0 bottom-0 h-[400px] pointer-events-none"
      />
    </main>
  );
};
