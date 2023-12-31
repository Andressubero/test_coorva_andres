import React, { useState } from 'react'
import { sectorCountItem } from 'src/graphql/client';
const sectorsCounts = [
    { id: 1, count: 457 },
    { id: 2, count: 512 },
    { id: 3, count: 79 },
    { id: 4, count: 687 },
    { id: 5, count: 234 },
    { id: 6, count: 820 },
    { id: 7, count: 112 },
    { id: 8, count: 400 },
    { id: 9, count: 517 },
    { id: 10, count: 300 },
    { id: 11, count: 700 },
    { id: 12, count: 120 },
    { id: 13, count: 350 },
    { id: 14, count: 600 },
    { id: 15, count: 450 },
    { id: 16, count: 250 },
    { id: 17, count: 500 },
    { id: 18, count: 100 },
    { id: 19, count: 550 },
    { id: 20, count: 200 },
    { id: 21, count: 650 },
    { id: 22, count: 150 },
    { id: 23, count: 700 },
    { id: 24, count: 50 },
    { id: 25, count: 750 },
    { id: 26, count: 400 },
    { id: 27, count: 800 },
    { id: 28, count: 350 },
    { id: 29, count: 750 },
    { id: 30, count: 300 }
  ];
  const useSectorsCount = () => {
    const [ isLoading, setLoading ] = useState<boolean>(false)
    const getSectorsCount = async (): Promise<Array<sectorCountItem>> => {
      setLoading(true);
        return new Promise((resolve) => {
          setTimeout(() => {
            setLoading(false);
            resolve(sectorsCounts);
          }, 400);
        });
    }
    return (
      { getSectorsCount, isLoading }
    )
  }
  
  export default useSectorsCount