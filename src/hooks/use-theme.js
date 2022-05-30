import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useTheme = () => {
  const theme = useSelector(state => state.theme);
  
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#ccc';
  }, [theme]);
};

export { useTheme };
