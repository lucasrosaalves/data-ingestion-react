import { useState, ChangeEvent } from "react";
import { MenuItem, Paper, TextField } from "@material-ui/core";
import "./styles.scss";

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
            <div className="row w-100">
              <div className="col-12 col-md-6 my-3 px-3">
                <TextField
                  label="My Template Name"
                  id="templateName"
                  onChange={handleChange}
                  inputProps={{
                    name: "templateName",
                    id: "templateName",
                  }}
                />
              </div>

              <div className="col-12 col-md-6 my-3 px-3">
                <TextField 
                  id="assetType"
                  select
                  label="Asset Types"
                  value={state.assetType}
                  onChange={handleChange}
                  inputProps={{
                    name: "assetType",
                    id: "assetType",
                  }}
                  variant="outlined"
                >
                  {assetTypes.map((a) => {
                    return <MenuItem value={a.id} key={a.id}>{a.name}</MenuItem >;
                  })}
                </TextField>
              </div>
            </div>
          </Paper>
    </div>
  );
}

export default Templates;
