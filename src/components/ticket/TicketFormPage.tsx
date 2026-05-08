import { Hero } from '../layout/Hero';
import { Form } from './Form';

export const TicketFormPage = () => {
  return (
    <section className="max-w-[450px] md:max-w-[600px] mx-auto px-4 pb-20 space-y-10">
      <Hero />
      <Form />
    </section>
  );
};
