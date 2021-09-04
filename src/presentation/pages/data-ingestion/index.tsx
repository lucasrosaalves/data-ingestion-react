import { useState, ChangeEvent } from "react";
import { Paper } from "@material-ui/core";
import "./styles.scss";
import FieldsSelecion from "./components/fields-selection";
import HotTable from "@handsontable/react";
import Handsontable from "handsontable";

const assets = [
  { id: "1", name: "Asset 1" },
  { id: "2", name: "Asset 2" },
];

const templates = [
  { id: "1", name: "Template 1" },
  { id: "2", name: "Template 2" },
];

const data: any[] = [[], [], []];

const columns: Handsontable.ColumnSettings[] = [
  { title: "Name" },
  { title: "Location" },
  { title: "Date" },
  { title: "Asset Uptime" },
];

function DataIngestion() {
  const [state, setState] = useState<{ asset: string; template: string }>({
    asset: "",
    template: "",
  });

  const handleChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const renderTable = () => {
    if (!state.asset || !state.template) {
      return <></>;
    }

    return (
      <div id="hot-app">
        <HotTable
          settings={{
            data: data,
            colHeaders: true,
            columns: columns,
            height: "auto",
            colWidths: 100,
            className: 'htCenter',
            licenseKey: "non-commercial-and-evaluation",
          }}
        />
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <h3> Data Ingestion</h3>
      <Paper className="paper p-2">
        <FieldsSelecion
          assets={assets}
          templates={templates}
          selectedAsset={state.asset}
          selectedTemplate={state.template}
          handleChange={handleChange}
        />
        {renderTable()}
      </Paper>
    </div>
  );
}

export default DataIngestion;
