import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { AddWarehouse } from "../redux/warehouse/actions";

const NewWarehouse = ({ addWarehouse }) => {
  const history = useHistory();
  const [id, setId] = useState(0);
  const [zipCodes, setZipCodes] = useState("");

  const onAdd = () => {
    addWarehouse({
      id,
      zip_codes: zipCodes,
    });
    history.replace("/");
  };

  return (
    <div>
      <h1 className="title">Add a new warehouse</h1>
      <form>
        <div className="form-control">
          <label>Warehouse id</label>
          <input value={id} onChange={(e) => setId(e.target.value)} />
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
        <Button onClick={onAdd}>Add</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWarehouse: (item) => dispatch(AddWarehouse(item)),
  };
};

export default connect(null, mapDispatchToProps)(NewWarehouse);
