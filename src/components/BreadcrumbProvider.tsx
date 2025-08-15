import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useMatches } from '@tanstack/react-router';
import React from 'react';
import { createPortal } from 'react-dom';

interface BItem {
  id: string;
  node: React.ReactNode;
}

interface TBreadcrumbContext {
  addBreadcrumbItem: (item: BItem) => void;
}

const BreadcrumbContext = React.createContext<TBreadcrumbContext | null>(null);

export const useBreadcrumbContext = () => {
  const context = React.useContext(BreadcrumbContext);

  if (!context) {
    throw new Error('Bread context not found.');
  }

  return context;
};

export const useResigterBreadcrumb = (item: BItem) => {
  const { addBreadcrumbItem } = useBreadcrumbContext();

  React.useEffect(() => {
    addBreadcrumbItem(item);
  }, [addBreadcrumbItem]);
};

type State = {
  items: Record<string, BItem>;
};

const defaultState: State = {
  items: {},
};

type Action = {
  type: 'ADD_BREADCRUMB_ITEM';
  payload: BItem;
};

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_BREADCRUMB_ITEM':
      const nextState = { items: { ...state.items, [payload.id]: payload } };
      return nextState;
    default:
      return state;
  }
};

export const BreadcrumbProvider: React.FC<
  React.PropsWithChildren<{ id: string }>
> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const matches = useMatches();

  const contextValue: TBreadcrumbContext = React.useMemo(
    () => ({
      addBreadcrumbItem: (item) =>
        dispatch({
          type: 'ADD_BREADCRUMB_ITEM',
          payload: item,
        }),
    }),
    [],
  );

  const links = React.useMemo(
    () =>
      matches.reduce<React.ReactNode[]>((acc, curr) => {
        const item = state.items[curr.id];
        if (item) {
          acc.push(item.node);
        }
        return acc;
      }, []),
    [matches, state.items],
  );

  React.useEffect(() => {
    // TODO: get the root dynamically
    const targetNode = document.getElementById('breadcrumb-root')!;

    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          setContainer(document.getElementById(props.id));
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, { childList: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <BreadcrumbContext.Provider value={contextValue}>
      {props.children}
      {container && createPortal(<Breadcrumbs>{links}</Breadcrumbs>, container)}
    </BreadcrumbContext.Provider>
  );
};
