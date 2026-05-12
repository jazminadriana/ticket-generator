import { TicketFormPage } from './components/ticket/TicketFormPage';
import { MainLayout } from './components/layout/MainLayout';
import { TicketCard } from './components/ticket/TicketCard.tsx';

function App() {
  return (
    <MainLayout>
      {/*  <TicketFormPage /> */}
      <TicketCard />
    </MainLayout>
  );
}

export default App;
