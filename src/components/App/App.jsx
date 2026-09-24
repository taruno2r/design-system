import { useState } from "react";
import heroImg from "../../assets/hero.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
// import "./App.css";
import Button from "../Button/Button.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await saveData();
    setIsLoading(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleSave} loading={isLoading}>
        Save Changes
      </Button>

      <Button variant="primary" icon="→"></Button>

      <Button variant="secondary" icon="→" iconPosition="right">
        Search
      </Button>

      <Button variant="ghost" disabled>
        Disabled
      </Button>

      <Button variant="danger" onClick={() => handleDelete()} icon="⊡">
        Delete
      </Button>
    </div>
  );
}

export default App;
