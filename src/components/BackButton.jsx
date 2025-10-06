// Remember to import this hook to navigate pages
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault(); // Need to do this because this Button is in a form, so when clicking back, it resubmits the form
        navigate(-1); // this means go back one time
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
