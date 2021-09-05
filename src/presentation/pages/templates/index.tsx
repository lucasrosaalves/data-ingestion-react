import { useState, ChangeEvent } from "react";
import { Button, Paper } from "@material-ui/core";
import "./styles.scss";
import FieldsSelecion from "./components/fields-selection";
import AvailableFields from "./components/available-fields";
import { useTranslation } from "react-i18next";

const assetTypes = [
  { id: "1", name: "Injection Point" },
  { id: "2", name: "Well" },
];

function Templates() {
  const { t } = useTranslation();

  const [state, setState] = useState<{
    assetType: string;
    templateName: string;
  }>({
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
    <div className="container-fluid px-0">
      <h3> {t('templatesPage.title')}</h3>
      <Paper className="paper p-2">
        <FieldsSelecion
          assetTypes={assetTypes}
          selectedAssetType={state.assetType}
          handleChange={handleChange}
        />
        <AvailableFields />

        <div className="row  justify-content-end my-2">
          <div className="col-12 col-md-2">
            <Button variant="contained" color="primary" size="large" className="save-button">
              {t('saveButton')}
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Templates;
