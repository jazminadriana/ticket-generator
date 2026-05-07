import { Hero } from '../layout/Hero';
import { Form } from '../Form';
import { Header } from '../layout/Header';

export const TicketFormPage = () => {
  return (
    <section className="w-[375px] mx-auto pb-[100px]">
      <Header />
      <Hero />
      <Form />
    </section>
  );
};
