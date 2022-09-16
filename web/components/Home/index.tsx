import { _hero } from './_hero';
import { _tabs } from './_tabs';

export { HomeC };

const HomeC: React.FC = () => {
  return (
    <>
      <_hero />
      <_tabs />
    </>
  );
};
