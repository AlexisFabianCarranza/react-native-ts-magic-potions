import React from 'react';

export type ContextProps = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};

export const LoadingContext = React.createContext<ContextProps>({
  isLoading: false,
  setLoading: () => {},
});

export const LoadingProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const setLoading = (newState: boolean) => {
    if (!newState) {
      setTimeout(() => {
        setIsLoading(newState);
      }, 500);
    } else {
      setIsLoading(newState);
    }
  };
  return (
    <LoadingContext.Provider value={{isLoading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};
