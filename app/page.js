
// app/page.js
import Script from "next/script";

import Herosection from "./components/home/Herosection";
import Services from "./components/home/Services";
import Whychoseus from "./components/home/Whychoseus";
import Industries from "./components/home/Industries";
import Projects from "./components/home/Projects";
import Testimonial from "./components/home/Testimonial";
import CallToAction from "./components/home/CallToAction";

export default function Page() {
  return (
    <main>
      <Herosection />
      <Services />
      <Whychoseus />
      <Industries />
      <Projects />
      <Testimonial />
      <CallToAction />

      <Script
        src="https://cdn.zanderio.ai/widget/loader.js"
        data-id="wdg_EHMqpLgkG60ynDGb0LEzwNwj"
        strategy="afterInteractive"
      />
    </main>
  );
}

