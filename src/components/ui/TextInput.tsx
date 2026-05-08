interface Props {
  label: string;
  placeholder: string;
  type?: 'text' | 'email';
}

export const TextInput = ({ label, placeholder, type = 'text' }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label
        className="mb-2 text-lg font-medium text-neutral-0"
        htmlFor={label}
      ></label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className="
        h-[56px] px-4 rounded-xl
        bg-neutral-800/50
        text-neutral-0 placeholder:text-neutral-200
        transition-all duration-200
        focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink/30
        hover:border-neutral-400
       "
      />
    </div>
  );
};
