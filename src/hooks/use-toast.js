
// Import the useToast hook from the UI component
import { useToast as useToastInternal } from "../components/ui/use-toast";

// Re-export the useToast hook
export const useToast = useToastInternal;

// Create a standalone toast function that doesn't create circular dependencies
export const toast = (props) => {
  // Get the toast function from the hook
  const { toast: toastFn } = useToastInternal();
  
  // Return the result of calling the function
  return toastFn(props);
};
