import "./App.css";
import CustomizedBadges from "./MUI/CustomizedBadges";
import ButtonAndField from "./MUI/ButtonAndField";
import BasicModal from "./MUI/BasicModal";

function App() {
  return (
    <div className="web">
      <ButtonAndField />
      <CustomizedBadges />
      <BasicModal />
    </div>
  );
}

export default App;
