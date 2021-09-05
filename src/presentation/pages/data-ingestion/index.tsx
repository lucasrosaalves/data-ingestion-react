import { useState, ChangeEvent } from "react";
import { Button, Paper } from "@material-ui/core";
import "./styles.scss";
import FieldsSelecion from "./components/fields-selection";
import DataIngestionTable from "./components/table";
import { useTranslation } from "react-i18next";

const assets = [
  { id: "1", name: "Asset 1" },
  { id: "2", name: "Asset 2" },
];

const templates = [
  { id: "1", name: "Template 1" },
  { id: "2", name: "Template 2" },
];

function DataIngestion() {
  const {t} = useTranslation();

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

    return <DataIngestionTable />;
  };

  return (
    <div className="container-fluid px-0">
      <h3> {t('dataIngestionPage.title')}</h3>
      <Paper className="paper p-2">
        <FieldsSelecion
          assets={assets}
          templates={templates}
          selectedAsset={state.asset}
          selectedTemplate={state.template}
          handleChange={handleChange}
        />
        {renderTable()}

        <div className="row  justify-content-end my-2">
          <div className="col-12 col-md-2">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="save-button"
            >
              {t('saveButton')}
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default DataIngestion;
