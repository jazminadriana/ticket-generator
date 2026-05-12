import { SuccessMessage } from './subcomponents/SuccessMessage';
import { TicketUserInfo } from './subcomponents/TicketUserInfo';

export const TicketCard = () => {
  return (
    <>
      <SuccessMessage name="John Doe" email="john.doe@example.com" />
      <TicketUserInfo />
    </>
  );
};
