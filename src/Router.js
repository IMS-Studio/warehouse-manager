import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditWarehouse from "./screens/EditWarehouse";
import NewWarehouse from "./screens/NewWarehouse";
import WarehouseList from "./screens/WarehouseList";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <WarehouseList />
        </Route>
        <Route path="/new">
          <NewWarehouse />
        </Route>
        <Route path="/edit/:id">
          <EditWarehouse />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
