import { useState, useEffect } from 'react';

export function useAhmedabadTime() {
  const [timeString, setTimeString] = useState('');
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      
      const istTime = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(istTime);

      // Check current hour in IST
      const istHour = parseInt(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false }).format(now), 10);
      setIsWorkingHours(istHour >= 9 && istHour <= 23);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeString, isWorkingHours, timezone: 'IST (UTC+5:30)', location: 'Ahmedabad, IN' };
}
