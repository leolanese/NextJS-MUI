import dynamic from "next/dynamic";
import {Suspense} from "react";
import {Back} from "utility/Back";

const DynamicComponent = dynamic(() => import("../pages/example-10"));

const fetcher = (url: string)  => fetch(url).then((res) => res.json());

export default function Index() {

  return (
    <>
      <div style={{ margin: 30 }}>
        <Back />
        <h1>Dynamic imports</h1>
        <Suspense fallback={<div>Loading...</div>}>
          {/* react/suspense has a specified fallback element, which is displayed 
          until the imported component is available: Faster page loads and Low bounce rates */}
        </Suspense>
        <DynamicComponent />
        <p>HOME PAGE is here! </p>
      </div>
    </>
  );
}
