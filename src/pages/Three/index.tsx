import { useRef, useEffect } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import RcCard from "@/components/RcCard";
import { markDownText } from "./constant";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const EchartsReact = () => {
  useEffect(() => {
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("models/object.json", addModelToScene);

    function addModelToScene(geometry, materials) {
      var material = new THREE.MeshFaceMaterial(materials);
      var object = new THREE.Mesh(geometry, material);
      object.scale.set(10, 10, 10);
      scene.add(object);
    }
  }, []);

  return (
    <>
      <PageContainer>
        <RcCard
          content={
            <>
              <h1>2.demo</h1>
            </>
          }
          code={markDownText}
          descriptionTitle={"threeJS"}
          description={"threeJS"}
        />
      </PageContainer>
    </>
  );
};

export default EchartsReact;
