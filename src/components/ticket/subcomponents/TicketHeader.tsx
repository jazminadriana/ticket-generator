export const TicketHeader = () => {
  return (
    <section className="mb-8">
      <h1 className="mb-6 px-4 text-center text-3xl md:text-5xl font-extrabold tracking-tight">
        Congrats, <span>name</span>
        <span>last name</span> Your Training Pass is Ready.
      </h1>
      <p className="mx-auto max-w-2xl text-center text-lg font-medium text-neutral-300 leading-relaxed">
        We've emailed your pass <span>email</span> and look forward to seeing
        you at the studio.
      </p>
    </section>
  );
};
