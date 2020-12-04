import React, { useEffect, useRef } from 'react'
const useWatch = (data: any, callback: Function): any => {
  const prev = useRef();
  let inited = useRef(false);
  useEffect(() => {
    const execute = () => callback && callback(data, prev.current);
    if (!inited.current) { 
      inited.current = true
    } else {
      execute()
    }
    prev.current = data;
  }, [data])
};

export { useWatch }