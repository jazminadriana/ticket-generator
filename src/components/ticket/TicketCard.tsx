import { Form } from './Form';
import { SuccessMessage } from './subcomponents/SuccessMessage';
import { TicketUserInfo } from './subcomponents/TicketUserInfo';
import { TicketFormPage } from './TicketFormPage';

export const TicketCard = () => {
  return (
    <>
      <SuccessMessage name="John Doe" email="john.doe@example.com" />
      <TicketUserInfo />
    </>
  );
};
