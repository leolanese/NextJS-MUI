import dynamic from "next/dynamic";
import {Suspense} from "react";

const DynamicComponent = dynamic(() => import("../pages/example-10"));

const fetcher = (url: string) => 
  fetch(url).then((res) => res.json());

const Example9 = dynamic(() =>
  import("./example-9").then((res) => res.default)
);

export default function Index() {

  return (
    <>
      <div style={{ margin: 30 }}>
        <h1>Dynamic imports</h1>
        <Suspense fallback={<div>Loading...</div>}>
          {/* react/suspense has a specified fallback element, which is displayed 
          until the imported component is available */}
          {/* Dynamic imports: Faster page loads and Low bounce rates */}
          <DynamicComponent />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Example9 />
        </Suspense>
      </div>
    </>
  );
}
