import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Page non trouvée</h1>
        <p className="text-gray-600 mt-4">La page que vous recherchez n'existe pas.</p>
      </div>
      <Link to="/">
        <Button>Page d'acceuil</Button>
      </Link>
    </div>
  );
};

export default NotFound;
