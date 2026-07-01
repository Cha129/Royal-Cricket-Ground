import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background)]">
      <Card className="glass-panel w-full max-w-md mx-4 rounded-lg border-border/50">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <AlertCircle className="h-12 w-12 text-primary" />
            <h1 className="text-4xl text-foreground font-display">404 - Page Not Found</h1>
          </div>
          <p className="text-sm text-muted-foreground leading-6">
            The page you are looking for does not exist or has been moved. Use the button below to head back home.
          </p>
          <Link href="/" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
