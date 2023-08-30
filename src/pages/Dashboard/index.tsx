import React, { useState } from "react";
import { Flex } from "vcc-ui";

import carData from "../../../public/api/cars.json";
import Pagination from "../../components/pagination";
import CarInfoCard from "../../components/CarInfoCard/Index";
import MobilePagination from "../../components/pagination/MobilePagination";
import Search from "../../components/TextFields";
import NullDataAlert from "../../components/commons/NullDataAlert";

export type CarInfo = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

type DashboardProps = {
  ITEMS_PER_PAGE: number;
};

const Dashboard = ({ ITEMS_PER_PAGE }: DashboardProps) => {
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState<carInfo[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    const filteredCars = carData.filter((car) =>
      car.bodyType.toLowerCase().includes(query.toLowerCase())
    );
    setFilterData(filteredCars);
    setCurrentPage(1);
  };

  const totalCars = query.length ? filterData : carData;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedCars = totalCars.slice(startIndex, endIndex);

  const totalPage = Math.ceil(totalCars.length / ITEMS_PER_PAGE);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // You would fetch your data and set the totalItems accordingly
  const totalItems = totalCars.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch new data based on the selected page if needed
  };

  return (
    <>
      <Search handleQueryChange={handleQueryChange} query={query} />
      <Flex
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {totalCars.length === 0 ? (
          <NullDataAlert />
        ) : (
          displayedCars.map((car) => <CarInfoCard car={car} key={car.id} />)
        )}
      </Flex>

      {ITEMS_PER_PAGE === 4 && totalCars.length > 4 ? (
        <Pagination
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      ) : (
        ITEMS_PER_PAGE === 1 &&
        totalCars.length > 1 && (
          <MobilePagination
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )
      )}
    </>
  );
};

export default Dashboard;
