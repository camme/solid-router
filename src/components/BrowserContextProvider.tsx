import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';
import ContextProvider from './ContextProvider';

interface BrowserContextProviderProps {
  options: BrowserHistoryBuildOptions;
  children?: any;
}

export default function BrowserContextProvider(
  props: BrowserContextProviderProps,
) {
  const history = createBrowserHistory(props.options);
  return (
    <ContextProvider history={history}>
      {props.children}
    </ContextProvider>
  );
}
