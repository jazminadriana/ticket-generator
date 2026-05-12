import { SuccessMessage } from './subcomponents/SuccessMessage';
import { TicketUserInfo } from './subcomponents/TicketUserInfo';

export const TicketCard = () => {
  return (
    <>
      <SuccessMessage />
      <TicketUserInfo />
    </>
  );
};
