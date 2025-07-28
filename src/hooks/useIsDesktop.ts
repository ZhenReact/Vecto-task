import { useEffect, useState } from 'react';

const useIsDesktop = (breakpoint = 1024): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
