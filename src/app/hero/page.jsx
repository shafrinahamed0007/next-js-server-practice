import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div className="min-h-[75vh] flex justify-center items-center">
      <div>
        <h2 className="font-semibold mb-5 text-center">Hero Page</h2>
        <div className="flex gap-5">
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Outline Button</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
