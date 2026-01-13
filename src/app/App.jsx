import { QueryProvider } from "./queryProvider";
import { Router } from "./router";

export default function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}
