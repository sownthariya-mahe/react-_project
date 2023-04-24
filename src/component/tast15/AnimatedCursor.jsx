import React from "react";
export function AnimatedCursor(){
    return(
        <>
        <AnimatedCursor
         innerSize={20}
         outerSize={10}
         color= '0,0,0'
         outerAlpha={0.5}
         innerScale={0.8}
         outerScale={8}
         clickables={[
           'a',
           'input[type="text"]',
           'input[type="email"]',
           'input[type="number"]',
           'input[type="submit"]',
           'input[type="image"]',
           'label[for]',
           'select',
           'textarea',
           'button',
           '.link'
         ]}
       />
        

        
        </>
    );
}