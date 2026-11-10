import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const val = w / (h * h);
      setBmi(parseFloat(val.toFixed(1)));

      if (val < 18.5) setMessage("Underweight");
      else if (val >= 18.5 && val < 25) setMessage("Healthy Weight");
      else if (val >= 25 && val < 30) setMessage("Overweight");
      else setMessage("Obese");
    }
  };

  return (
    <Card className="glass-card max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBMI} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-background/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-background/50"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Calculate Now
          </Button>
        </form>

        {bmi !== null && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">Your BMI is</p>
            <p className="text-3xl font-bold text-primary">{bmi}</p>
            <p className="text-lg font-semibold mt-1">{message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
