import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import WarehouseTable from "../components/WarehouseTable";
import Button from "../components/Button";
import { connect } from "react-redux";
import { DeleteWarehouse, LoadWarehouses } from "../redux/warehouse/actions";
import mock_warehouses from "../mock/warehouse.json";

const WarehouseList = ({ warehouses, loadWarehouse, deleteWarehouse }) => {
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(warehouses).length === 0) {
      loadWarehouse(mock_warehouses);
    }
  }, [warehouses, loadWarehouse]);

  const addNewWarehouse = () => {
    history.push("/new");
  };

  const onEditPress = (item) => {
    history.push(`/edit/${item}`);
  };

  const onDeletePress = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item}?`)) {
      deleteWarehouse(item);
    }
  };

  return (
    <div>
      <WarehouseTable
        onEdit={onEditPress}
        onDelete={onDeletePress}
        data={warehouses}
      />
      <br />
      <Button onClick={addNewWarehouse}>+ New warehouse</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    warehouses: { ...state.warehouse.data },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadWarehouse: (data) => dispatch(LoadWarehouses(data)),
    deleteWarehouse: (id) => dispatch(DeleteWarehouse(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WarehouseList);
