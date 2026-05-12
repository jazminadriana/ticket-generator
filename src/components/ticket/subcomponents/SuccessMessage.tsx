interface SuccessMessageProps {
  name: string;
  email: string;
}

export const SuccessMessage = ({ name, email }: SuccessMessageProps) => {
  return (
    <header className="mb-8 mt-10">
      <section className="flex flex-col items-center">
        <h1 className="mb-6 px-4 text-center text-3xl md:text-5xl font-extrabold tracking-tight">
          Congrats,{' '}
          <span className="bg-[image:var(--bg-image-text-gradient)] bg-clip-text text-transparent">
            {name}!
          </span>{' '}
          <br />
          Your Training Pass is Ready.
        </h1>
        <p className="mx-auto max-w-2xl text-center text-lg font-medium text-neutral-300 leading-relaxed">
          We've emailed your pass to{' '}
          <span className="text-pink-400">{email}</span> and look forward to
          seeing you at the studio.
        </p>
      </section>
    </header>
  );
};
