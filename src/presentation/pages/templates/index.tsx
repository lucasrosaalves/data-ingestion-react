import { useState, ChangeEvent } from "react";
import { MenuItem, Paper, TextField } from "@material-ui/core";
import "./styles.scss";
import FieldsSelecion from "./components/fields-selection";
import AvailableFields from "./components/available-fields";

const assetTypes = [
  { id: "1", name: "Injection Point" },
  { id: "2", name: "Well" },
];

function Templates() {
  const [state, setState] = useState<{ assetType: string; templateName: string }>({
    assetType: "",
    templateName: "",
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
      <h3> New Template</h3>
          <Paper className="paper p-2">
            <FieldsSelecion assetTypes={assetTypes} selectedAssetType={state.assetType} handleChange={handleChange} />
            <AvailableFields/>
          </Paper>
    </div>
  );
}

export default Templates;
