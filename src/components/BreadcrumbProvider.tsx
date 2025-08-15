import React from 'react';

interface BItem {
  id: string;
}

interface TBreadcrumbContext {
  addBreadcrumbItem: (item: BItem) => void;
  removeBreadcrumbItem: (id: BItem['id']) => void;
}

const BreadcrumbContext = React.createContext<TBreadcrumbContext | null>(null);

export const useBreadcrumbContext = () => {
  const context = React.useContext(BreadcrumbContext);

  if (!context) {
    throw new Error('Bread context not found.');
  }

  return context;
};

type State = {
  items: BItem[];
};

const defaultState: State = {
  items: [],
};

type Action =
  | {
      type: 'ADD_BREADCRUMB_ITEM';
      payload: BItem;
    }
  | {
      type: 'REMOVE_BREADCRUMB_ITEM';
      payload: { id: BItem['id'] };
    };

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_BREADCRUMB_ITEM':
      state.items = [...state.items, payload];
      return state;
    case 'REMOVE_BREADCRUMB_ITEM':
      state.items = state.items.filter((item) => item.id !== payload.id);
      return state;
    default:
      return state;
  }
};

export const BreadcrumbProvider: React.FC<React.PropsWithChildren> = (
  props,
) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  console.log(state);

  const contextValue: TBreadcrumbContext = React.useMemo(
    () => ({
      addBreadcrumbItem: (item) =>
        dispatch({
          type: 'ADD_BREADCRUMB_ITEM',
          payload: item,
        }),
      removeBreadcrumbItem: (id) =>
        dispatch({
          type: 'REMOVE_BREADCRUMB_ITEM',
          payload: {
            id,
          },
        }),
    }),
    [],
  );

  return (
    <BreadcrumbContext.Provider value={contextValue}>
      {props.children}
    </BreadcrumbContext.Provider>
  );
};
