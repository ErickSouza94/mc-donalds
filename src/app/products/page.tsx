import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Productpage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Product Page</h1>
      <Button> FSW 7.0</Button>
      <Input placeholder="Escrevendo qlqr coisa..." />
    </div>
  );
};

export default Productpage;
