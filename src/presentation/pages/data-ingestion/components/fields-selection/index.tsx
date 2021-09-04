import { MenuItem, TextField } from "@material-ui/core";
import "./styles.scss";

interface AssetTypes {
  id: string;
  name: string;
}

interface Template {
  id: string;
  name: string;
}

interface Props {
  selectedAsset: string;
  selectedTemplate: string;
  assets: AssetTypes[];
  templates: Template[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FieldsSelecion(props: Props) {
  return (
    <div className="row w-100">
      <div className="col-12 col-md-6 my-3 px-3">
        <TextField
          id="assets"
          select
          label="Assets"
          value={props.selectedAsset}
          onChange={props.handleChange}
          inputProps={{
            name: "asset",
            id: "asset",
          }}
          variant="outlined"
        >
          {props.assets.map((a) => {
            return (
              <MenuItem value={a.id} key={a.id}>
                {a.name}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
      <div className="col-12 col-md-6 my-3 px-3">
        <TextField
          id="templates"
          select
          label="Templates"
          value={props.selectedTemplate}
          onChange={props.handleChange}
          inputProps={{
            name: "template",
            id: "template",
          }}
          variant="outlined"
        >
          {props.templates.map((a) => {
            return (
              <MenuItem value={a.id} key={a.id}>
                {a.name}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </div>
  );
}

export default FieldsSelecion;
