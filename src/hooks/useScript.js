import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = url;
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script)

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    }
  }, [url]);
};

export default useScript;