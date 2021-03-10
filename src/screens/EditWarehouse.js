import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Button from "../components/Button";
import { UpdateWarehouse } from "../redux/warehouse/actions";

const EditWarehouse = ({ warehouses, saveWarehouse }) => {
  const history = useHistory();
  const [warehouseId, setWarehouseId] = useState(0);
  const [zipCodes, setZipCodes] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setWarehouseId(id);
    setZipCodes(warehouses[id]);
  }, [id, warehouses]);

  const onSave = () => {
    saveWarehouse({ previous: id, id: warehouseId, zip_codes: zipCodes });
    history.replace("/");
  };

  return (
    <div>
      <h1 className="title">Edit warehouse</h1>
      <form>
        <div className="form-control">
          <label>Warehouse id</label>
          <input
            value={warehouseId}
            onChange={(e) => setWarehouseId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Zip codes</label>
          <textarea
            placeholder="Zip codes"
            rows={5}
            onChange={(e) => setZipCodes(e.target.value)}
            value={zipCodes}
          />
        </div>
        <Button onClick={onSave}>Save</Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  warehouses: state.warehouse.data,
});

const mapDispatchToProps = (dispatch) => ({
  saveWarehouse: (data) => dispatch(UpdateWarehouse(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWarehouse);
