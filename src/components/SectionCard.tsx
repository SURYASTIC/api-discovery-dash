import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export const SectionCard = ({ title, children }: SectionCardProps) => {
  return (
    <Card className="section-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};