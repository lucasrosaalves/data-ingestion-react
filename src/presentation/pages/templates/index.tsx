import {useState,ChangeEvent} from 'react';
import { Paper, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        minHeight: 600
    },
    select: {
      minWidth: 200,
    }
  }),
);


const assetTypes = [
    { id: '1', name: 'Injection Point'},
    { id: '2', name: 'Well'}
]

function Templates() {
    const classes = useStyles();
    const [state, setState] = useState<{ assetType: string | number; name: string }>({
        assetType: '',
        name: 'hai',
      });
    
      const handleChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

  return (
    <div className="content">
      <h3> New Template</h3>
      <Paper className={classes.paper}>
          
        <div >
        <TextField className={classes.select}
          id="assetTypes"
          select
          label="Asset Types"
          value={state.assetType}
          onChange={handleChange}
          inputProps={{
            name: 'assetType',
            id: 'assetTypes',
          }}
          variant="outlined"
        >
          <option aria-label="None" value="" />

            {assetTypes.map(a => {
                return (<option value={a.id}>{a.name}</option>)
            })}
        </TextField>
      </div>
      </Paper>
    </div>
  );
}

export default Templates;
