import type { Metadata } from 'next';
import OwnerProfile from '../../components/profile/OwnerProfile';

export const metadata: Metadata = {
  title: 'Hồ Sơ Năng Lực | Lê Quang Ngọc',
  description: 'Hồ sơ năng lực cá nhân của Lê Quang Ngọc, người sáng lập & giám đốc công ty.',
};

export default function ProfilePage() {
  return <OwnerProfile />;
}
