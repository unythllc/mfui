"use client";
import XMFUI from "@/icons/XMFUI";
import { FaChevronDown } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import ListBox from "@/components/ListBox/ListBox";

function Main() {
  const handleSelect = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div
      className={
        "font-halyard caret-dark-red selection:bg-dark-red selection:text-white relative"
      }
    >
      <main
        style={{ zIndex: 3 }}
        className="flex flex-col items-center justify-center flex-1 text-center lg:w-9/12 mt-24 rounded-lg mx-auto"
      >
        <div className={"w-8/12"}>
          <h1 className="text-4xl font-black text-dark-red mt-12">Browse By</h1>
          <div
            className={
              "flex gap-x-6 justify-between text-lg font-medium text-white w-full my-8"
            }
          >
            <ListBox
              handleChange={handleSelect}
              default="Category"
              name={"energy"}
              items={["-", "Guides", "Questions", "Troubleshooting"]}
            />
            <ListBox
              handleChange={handleSelect}
              default="Styles"
              name={"energy"}
              items={["-", "Guides", "Questions", "Troubleshooting"]}
            />
            <ListBox
              handleChange={handleSelect}
              default="Tags"
              name={"energy"}
              items={["-", "Guides", "Questions", "Troubleshooting"]}
            />
          </div>
        </div>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-8 px-8 py-4"
          }
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i, idx) => (
            <div key={i}>
              <ProductCard id={crypto.randomUUID()} number={Number(idx)} />
            </div>
          ))}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <ProductCard id={i} number={i} />
            </div>
          ))}
        </div>
      </main>
      <div
        style={{
          zIndex: "-10",
        }}
        className={
          "fixed h-full top-0 w-full bg-dark-background opacity-20 z-0"
        }
      >
        <XMFUI />
      </div>
    </div>
  );
}

export default Main;
