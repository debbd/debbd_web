
import { useSwiperManager } from "@/hooks";
import { PortFolioDataType, PortfolioServiceType } from "@/types";
import React, { useCallback, useEffect, useState } from "react";


export const usePortfolioCategorySliding = (
  data: PortFolioDataType,
  serviceTypes: PortfolioServiceType[] 
) => {
  const {
    swiperRef,
    btnsRef: categoryButtonsRef,
    slidingTabRef: overflowButtonRef,
  } = useSwiperManager();

  
  const [currentCategory, setCurrentCategory] = useState<string>("");


  useEffect(() => {
    if (serviceTypes.length > 0 && currentCategory === "") {
      setCurrentCategory(serviceTypes[0].slug.current);
    }
  }, [serviceTypes]);

  const moveOverflowButtonTo = useCallback((btnId: number) => {
    const btn = categoryButtonsRef.current[btnId];
    if (!btn) return;

    const key = serviceTypes[btnId]?.slug.current; 
    if (!key) return;

    setCurrentCategory(key);

    if (!overflowButtonRef.current) return;
    overflowButtonRef.current.style.width = `${btn.offsetWidth}px`;
    overflowButtonRef.current.style.height = `${btn.offsetHeight}px`;
    overflowButtonRef.current.style.top = `${btn.offsetTop}px`;
    overflowButtonRef.current.style.left = `${btn.offsetLeft}px`;
  }, [serviceTypes]);

  return {
    moveOverflowButtonTo,
    currentCategory,
    swiperRef,
    categoryButtonsRef,
    overflowButtonRef,
  };
};