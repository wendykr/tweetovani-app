import { toast, Slide } from 'react-toastify';

export const useToast = () => {
  const showToast = (title: string) => {
    toast(title, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: 'light',
      transition: Slide,
      closeButton: false,
      style: {
        width: '220px',
        height: '20px',
        background: '#1da1f2',
        color: '#ffffff',
        fontSize: '18px',
        textAlign: 'center',
      },
      className: 'toastify-container',
    });
  };

  return { showToast };
};
