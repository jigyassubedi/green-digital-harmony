
// Import the toast functionality from the UI component
import { useToast as useToastInternal } from "../components/ui/use-toast";

// Function to use in components
const useToast = useToastInternal;

// Function to call directly
const toast = (props) => {
  const { toast: toastFn } = useToastInternal();
  return toastFn(props);
};

// Re-export them to make them available to the rest of the app
export { useToast, toast };
