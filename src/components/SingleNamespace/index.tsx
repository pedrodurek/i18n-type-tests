import { useTranslation } from 'react-i18next';

const SingleNamespace = () => {
  const { t } = useTranslation('ns1');
  return (
    <div>
      <span>{t('key01').subKey01.subSubKey03}</span>
      <span>{t('key01.subKey01').subSubKey03}</span>
      <span>{t('key01.subKey01.subSubKey04')}</span>
    </div>
  );
};

export default SingleNamespace;
