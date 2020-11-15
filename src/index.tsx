import { FC } from 'react';
import ReactDOM from 'react-dom';
import 'i18n/config';
import SingleNamespace from 'components/SingleNamespace';
import MultipleNamespaces from 'components/MultipleNamespaces';

const App: FC = () => (
  <>
    <MultipleNamespaces />
    <SingleNamespace />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
