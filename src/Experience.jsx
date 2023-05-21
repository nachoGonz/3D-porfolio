import {
  PresentationControls,
  Float,
  Environment,
  Html,
  ContactShadows,
  useMatcapTexture,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { macUrl, porfolioHtml } from "./utils/constants";
import typefaceFont from "three/examples/fonts/helvetiker_regular.typeface.json";

export const Experience = () => {
  const macBook = useGLTF(macUrl);
  const [matcapTexture] = useMatcapTexture("54584E_B1BAC5_818B91_A7ACA3", 256);
  console.log(matcapTexture);

  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach={"background"} />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive object={macBook.scene} position-y={-1} scale={0.8}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={"#0b3e49"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0.6, -1.1]}
            />
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={[porfolioHtml]} />
            </Html>
          </primitive>
          <Text3D
            font={typefaceFont}
            size={0.25}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[0.1, 1.45, 0.5]}
            rotation-y={-1.2}
          >
            {"NACHO \n  GONZALEZ"}
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} />
    </>
  );
};
