import Section from "@/components/layout/section";
import Heading from "@/components/atoms/heading";

type Props = {};

const DemoVideo = (props: Props) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl"
          title="Live Demo of Comment Crafter magical work"
        />

        <div className="mb-10 flex flex-wrap gap-10">
          <iframe
            src="https://www.loom.com/embed/b55fdcf0de024ca6bdf343fe1e7e7bf4"
            allowTransparency
            allowFullScreen
            className="w-full h-64"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default DemoVideo;
