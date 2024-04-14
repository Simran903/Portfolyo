import { useState, useEffect } from 'react';

const UseUserData = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchUserData();
  }, []);

  return { userData, error };
};

export default UseUserData;