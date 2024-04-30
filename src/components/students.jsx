// Import React Icons

// Components
import Header from "./header";

const Students = () => {
  return (
    <div className="w-[79%] h-dvh overflow-hidden">
      {/* Students Header */}
      <Header />

      {/* Students Body */}
      <div className="w-full h-[90%] grid grid-cols-1 tabletRg:grid-cols-2 tabletLg:grid-cols-3 gap-[3rem] p-[3%] overflow-auto"></div>
    </div>
  );
};

export default Students;