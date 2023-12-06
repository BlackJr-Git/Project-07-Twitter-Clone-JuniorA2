import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { Navigation } from "./components/index.js";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Navigation />
      <Home />
    </Layout>
  );
}

