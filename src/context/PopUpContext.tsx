import { createContext, useContext, useState, PropsWithChildren } from 'react';

interface PopUpContextData {
  isShowPopUp: boolean;
  onClickPopUp: () => void;
  onClickClosePopUp: () => void;
}

export const PopUpContext = createContext<PopUpContextData>({
  isShowPopUp: false,
  onClickPopUp: () => {},
  onClickClosePopUp: () => {},
});

export const PopUpProvider = ({ children }: PropsWithChildren) => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const onClickPopUp = () => {
    setIsShowPopUp(!isShowPopUp);
  };

  const onClickClosePopUp = () => {
    setIsShowPopUp(false);
  };

  return (
    <PopUpContext.Provider
      value={{
        isShowPopUp,
        onClickPopUp,
        onClickClosePopUp,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopUp = () => useContext(PopUpContext);
