import Card from "@/components/Card";
import { data } from "./data/dessert";
import Cart from "./components/Cart";
const App = () => {
  return (
    <div className=" container  my-10 p-1    mx-auto">
      <div className="  Ds:grid Ds:grid-cols-6 Ds:gap-5">
        <div className=" Ds:col-span-4">
          <h1 className="text-[#2c140e]  text-4xl pb-4 font-bold Ds:text-6xl md:text-center Ds:text-left">
            Desserts
          </h1>
          <div className=" flex flex-col gap-10 Ds:gap-5  Ds:col-span-2 Ds:grid Ds:grid-cols-3">
            {data.map((item, idx) => {
              return <Card key={item.image.desktop} data={item} />;
            })}
          </div>
        </div>
        <div className="mt-8 Ds:mt-0 Ds:col-span-2 ">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
