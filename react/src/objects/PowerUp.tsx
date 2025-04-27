import { useEffect, useState } from "react";

interface PowerUp {
   x: number;
   y: number;
   isCollected: boolean;
   onCollect?: () => void;
}

const PowerUp: React.FC<PowerUp> = ({ x, y, isCollected, onCollect }) => {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      if (isCollected) {
         setVisible(false);
         onCollect?.();
      }
   }, [isCollected, onCollect]);

   if (!visible) return null;

   return (
      <div
         className="absolute w-10 h-10 rounded-full bg-green-500 border-2 border-white animate-bounce"
         style={{
            left: `${x}px`,
            bottom: `${y}px`,
            zIndex: 20,
         }}
      />
   );
};

export default PowerUp;
