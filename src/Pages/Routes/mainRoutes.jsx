import CustomerList from "../CustomerList/CustomerList";
import MainLayout from "../../Layout/MainLayout";
import BillGenerator from "../BillGenerator/BillGenerator";

const MainRoutes = {
    path: "sidebar",
    element: (
      <MainLayout/>
    ),
    children: [
      {
        path: 'customerlist',
        element: <CustomerList/>
      },
      {
        path: 'billgenerator',
        element: <BillGenerator/>
      },
     
    ]}
    export default MainRoutes