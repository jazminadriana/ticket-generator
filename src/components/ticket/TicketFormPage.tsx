import { Hero } from '../layout/Hero';
import { Form } from './Form';
import { Header } from '../layout/Header';

export const TicketFormPage = () => {
  return (
    <section className="max-w-[450px] md:max-w-[600px] mx-auto px-4 pb-20 space-y-10">
      <Header />
      <Hero />
      <Form />
    </section>
  );
};
