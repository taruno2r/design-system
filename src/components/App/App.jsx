import { useState } from "react";
import heroImg from "../../assets/hero.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
// import "./App.css";
import Button from "../Button/Button.jsx";
import {
  Card,
  CardMedia,
  CardBody,
  CardTitle,
  CardDescription,
  CardActions,
} from "../Card/Card.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await saveData();
    setIsLoading(false);
  };

  return (
    <div>
      {/*<Button
        variant="primary"
        onClick={handleSave}
        loading={isLoading}
      >
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
      </Button> */}

      <Card variant="outlined" interactive>
        <CardMedia src="https://picsum.photos/600/200" alt="Tarun" />
        <CardBody>
          <CardTitle>Rich card</CardTitle>
          <CardDescription>
            With all the details With all the details With all the details
          </CardDescription>
        </CardBody>
        <CardActions>
          <Button variant="secondary" fullWidth>
            Cancel Now
          </Button>
          <Button icon="→" iconPosition="right" fullWidth>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
