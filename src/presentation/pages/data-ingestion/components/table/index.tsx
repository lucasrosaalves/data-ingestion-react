import HotTable from "@handsontable/react";
import { TextField } from "@material-ui/core";
import Handsontable from "handsontable";

const data: any[] = [[]];

const columns: Handsontable.ColumnSettings[] = [
  { title: "Name" },
  { title: "Location" },
  { title: "Date" },
  { title: "Asset Uptime" },
];

function DataIngestionTable() {
  return (
    <div className="row">
      <div className="col-12 d-none d-md-block">
        <div id="hot-app">
          <HotTable
            settings={{
              data: data,
              colHeaders: true,
              columns: columns,
              licenseKey: "non-commercial-and-evaluation",
            }}
          />
        </div>
      </div>

      <div className="col-12 d-block d-md-none my-2">
          {columns.map(c => {
              return (
                <TextField
                key={c.title}
                label={c.title}
                id={c.title}/>
              )
          })}

      </div>



    </div>
  );
}

export default DataIngestionTable;
