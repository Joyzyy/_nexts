import { _hero } from './_hero';
import { _tabs } from './Tabs';

export { HomeC };

const HomeC: React.FC = () => {
  return (
    <>
      <_hero />
      <_tabs />
    </>
  );
};
