"use client";

import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SiteComponent, SiteProps } from "@/components/features/site";

type SitesProps = {
  title: string;
  sites: SiteProps[];
};

export function SiteSection({ title, sites }: SitesProps) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sites.length / itemsPerPage);

  const currentItems = sites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1200) {
      setItemsPerPage(10);
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <>
      <p className="text-xl">{title}:</p>
      <div className="flex gap-4 px-4 py-2">
        {currentItems.map((site, index) => (
          <SiteComponent key={index} {...site} />
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

function PaginationComponent({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage !== 1 && (
            <PaginationPrevious onClick={goToPreviousPage} />
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {currentPage > 2 && <PaginationEllipsis />}
        {currentPage > 1 && currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 1 && <PaginationEllipsis />}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => setCurrentPage(totalPages)}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          {currentPage !== totalPages && (
            <PaginationNext onClick={goToNextPage} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
