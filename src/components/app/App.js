import "./App.css";
import { ControlPanel } from "../control-panel";
import { ActionsPanel } from "../actions-panel";
import { Grid } from "../grid";

export const App = () => {
  return (
    <div className="app">
      <ControlPanel />
      <Grid />
      <ActionsPanel />
    </div>
  );
};
