import { PORTFOLIO_DATA_BY_CATEGORY,  PortfolioCategoryType } from "@/constants";
import { useSwiperManager } from "@/hooks";
import React, { useCallback, useState } from "react";

export const usePortfolioCategorySliding = () => {
  const {
    swiperRef,
    btnsRef: categoryButtonsRef,
    slidingTabRef: overflowButtonRef,
  } = useSwiperManager();

  const [currentCategory, setCurrentCategory] =
    useState<PortfolioCategoryType>("SEO");

  const moveOverflowButtonTo = useCallback((btnId: number) => {
    const btn = categoryButtonsRef.current[btnId];
    if (!btn) return;
    setCurrentCategory(
      Object.keys(PORTFOLIO_DATA_BY_CATEGORY)[btnId] as PortfolioCategoryType
    );
    if (!overflowButtonRef.current) return;
    overflowButtonRef.current.style.width = `${btn.offsetWidth}px`;
    overflowButtonRef.current.style.height = `${btn.offsetHeight}px`;
    overflowButtonRef.current.style.top = `${btn.offsetTop}px`;
    overflowButtonRef.current.style.left = `${btn.offsetLeft}px`;
  }, []);
  return {
    moveOverflowButtonTo,
    currentCategory,
    swiperRef,
    categoryButtonsRef,
    overflowButtonRef,
  };
};
