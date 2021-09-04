import { useState, ChangeEvent } from "react";
import { Paper } from "@material-ui/core";
import "./styles.scss";
import FieldsSelecion from "./components/fields-selection";

const assets = [
  { id: "1", name: "Asset 1" },
  { id: "2", name: "Asset 2" },
];

const templates = [
  { id: "1", name: "Template 1" },
  { id: "2", name: "Template 2" },
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
      </Paper>
    </div>
  );
}

export default DataIngestion;
