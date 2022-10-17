import dynamic from "next/dynamic";
import {Suspense} from "react";

const Example9 = dynamic(
  () => import("./example-9").then((res) => res.default),
  { ssr: false }
  // disable server-side rendering for imported components and render these components on the client-side instead
);

const Example10 = dynamic(() => 
  import("./example-10").then((res) => res.default)
)

export default function Index() {
  return (
    <>
      <div style={{ margin: 30 }}>
        <h1>Multiple Dynamic imports</h1>

        <Suspense fallback={<div>Loading ...</div>}>
          {/* react/suspense has a specified fallback element, which is displayed 
          until the imported component is available */}
          {/* Dynamic imports: Faster page loads and Low bounce rates */}
          <Example10 />
        </Suspense>

        <Suspense fallback={<div>Loading Example9...</div>}>
          <Example9 />
        </Suspense>
      </div>
    </>
  );
}
