export const Header = () => {
  return (
    <header className="w-full py-8 flex justify-center items-center">
      <div className="flex items-center gap-3">
        /* imagen */
        <div className="w-8 h-8 bg-linear-to-tr from-brand-pink to-brand-purple rounded-lg rotate-12 flex items-center justify-center shadow-glow">
          <span className="text-neutral-900 font-black text-xs">PA</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-neutral-0">
          POLE ART <span className="text-brand-pink font-light">CON</span>
        </span>
      </div>
    </header>
  );
};
