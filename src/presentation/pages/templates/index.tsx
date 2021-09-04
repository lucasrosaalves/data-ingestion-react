import { useState, ChangeEvent } from "react";
import { Paper, TextField } from "@material-ui/core";
import "./styles.scss";

const assetTypes = [
  { id: "1", name: "Injection Point" },
  { id: "2", name: "Well" },
];

function Templates() {
  const [state, setState] = useState<{ assetTypes: string; templateName: string }>({
    assetTypes: "",
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
                  id="assetTypes"
                  select
                  label="Asset Types"
                  value={state.assetTypes}
                  onChange={handleChange}
                  inputProps={{
                    name: "assetTypes",
                    id: "assetTypes",
                  }}
                  variant="outlined"
                >
                  <option aria-label="None" value="" />

                  {assetTypes.map((a) => {
                    return <option value={a.id}>{a.name}</option>;
                  })}
                </TextField>
              </div>
            </div>
          </Paper>
    </div>
  );
}

export default Templates;
