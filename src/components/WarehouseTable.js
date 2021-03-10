const WarehouseTable = ({ data, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Warehouse id</th>
          <th colSpan={3}>Zip codes</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((item, index) => (
          <tr key={`${index}`}>
            <td>{item.split("_")[1]}</td>
            <td>
              {data[item].map((zip) => (
                <span className="tag" key={zip}>
                  {zip}
                </span>
              ))}
            </td>
            <td>
              <p className="button-text mh-10" onClick={() => onEdit(item)}>
                edit
              </p>
            </td>
            <td>
              <p className="button-text delete" onClick={() => onDelete(item)}>
                delete
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WarehouseTable;
