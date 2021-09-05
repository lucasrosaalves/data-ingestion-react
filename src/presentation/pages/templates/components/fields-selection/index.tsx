import { MenuItem, TextField } from "@material-ui/core";
import "./styles.scss";
import { useTranslation } from "react-i18next";

interface AssetTypes {
  id: string;
  name: string;
}

interface Props {
  selectedAssetType: string;
  assetTypes: AssetTypes[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FieldsSelecion(props: Props) {
  const {t} = useTranslation();

  return (
    <div className="row w-100">
      <div className="col-12 col-md-6 my-3 px-3">
        <TextField
          label={t('templatesPage.labelTemplateName')}
          id="templateName"
          onChange={props.handleChange}
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
          label={t('templatesPage.labelAssetTypes')}
          value={props.selectedAssetType}
          onChange={props.handleChange}
          inputProps={{
            name: "assetType",
            id: "assetType",
          }}
          variant="outlined"
        >
          {props.assetTypes.map((a) => {
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
