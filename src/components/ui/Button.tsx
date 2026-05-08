interface Props {
  text: String;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="
        w-full py-4 rounded-xl cursor-pointer
        text-xl font-bold text-neutral-900
        bg-linear-to-r from-brand-pink to-brand-purple
        hover:opacity-90 hover:scale-[1.01]
        active:scale-[0.98]
        transition-all duration-200
        shadow-[0_0_20px_rgba(235,113,151,0.3)]
      "
    >
      {text}
    </button>
  );
};
