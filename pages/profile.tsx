import { ProtectedPageWrapper } from '../components/core/ProtectedPageWrapper';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { ProfileUserData } from '../components/ProfileUserData';
import { ProfileNFTsList } from '../components/ProfileNFTsList';
import { ActionButton } from '../components/ActionButton';
import { useLogout } from '@useelven/core';

const Profile = () => {
  const { logout } = useLogout();
  return (
    <ProtectedPageWrapper>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <ProfileNFTsList />
        <ProfileUserData />
        <ActionButton display={'block'} mx={'auto'} mt={10} onClick={logout}>
          Disconnect
        </ActionButton>
      </MainLayout>
    </ProtectedPageWrapper>
  );
};

export default Profile;
