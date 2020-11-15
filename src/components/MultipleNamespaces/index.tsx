import { useTranslation } from 'react-i18next';

const MultipleNamespaces = () => {
  const { t } = useTranslation(['ns1', 'ns2']);

  return (
    <div>
      <span>{t('ns1:key01').subKey01.subSubKey02}</span>
      <span>{t('ns1:key01.subKey01').subSubKey03}</span>
      <span>{t('ns1:key01.subKey01.subSubKey04')}</span>
      <span>{t('ns2:key01').subKey01.subSubKey05}</span>
      <span>{t('ns2:key01.subKey01').subSubKey06}</span>
      <span>{t('ns2:key01.subKey01.subSubKey06')}</span>
    </div>
  );
};

export default MultipleNamespaces;
