import MainMessageBox from '@/components/MainMessageComponent/MainMessageBox';
import DashboardWrapper from '@/layout/DashboardWrapper/DashboardWrapper';

export default function MessagePage() {
  return (
    <DashboardWrapper mainTitle='Message'>
      <MainMessageBox />
    </DashboardWrapper>
  );
}
