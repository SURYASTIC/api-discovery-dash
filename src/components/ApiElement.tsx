import { toast } from 'sonner';

interface ApiElementProps {
  children: React.ReactNode;
  apiEndpoint: string;
  method?: string;
  description?: string;
}

export const ApiElement = ({
  children,
  apiEndpoint,
  method = 'GET',
  description,
}: ApiElementProps) => {
  const handleClick = () => {
    toast('API Information', {
      description: (
        <div className="space-y-2">
          <p><strong>Endpoint:</strong> {apiEndpoint}</p>
          <p><strong>Method:</strong> {method}</p>
          {description && <p><strong>Description:</strong> {description}</p>}
        </div>
      ),
    });
  };

  return (
    <div onClick={handleClick} className="api-element">
      {children}
    </div>
  );
};