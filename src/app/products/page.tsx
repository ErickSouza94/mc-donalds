import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Productpage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Product Page</h1>
      <Button> FSW 7.0</Button>
      <Input placeholder="Escrevendo qlqr coisa..."/>
    </div>
  );
};

export default Productpage;
