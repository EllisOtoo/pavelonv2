// import BoldSection from "../../components/organism/baas";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Link } from "@mui/material";
import { Image, Money } from "@mui/icons-material";
import HeaderArea from "../components/organism/HeaderArea";
// import BAASSection  from "../components/organism/BoldSection";

const BAAS_Section_Defaults = {
  altColor: "#f7fafe",
  singleImage: true,
  image: null,
  showButton: true,
  buttonTitle: ["Talk to our Experts", "Explore our Platform"],
  description:
    "Modern  financial products require a modern BaaS platform, Our Banking as a Service (BaaS) platform is designed from the ground up to be the effective engine that fuels any financial products or services you can imagine. It is adaptable, simple to connect to, and infinitely scalable.",
  mainCaption: "Banking as a Service -  We support the full account lifecycle",
};

const BAAS = () => {
  return (
    <>
      <HeaderArea
        reverse
        imageUrl={"/baas/mmk.png"}
        title="Banking as a Service - We support the full account lifecycle"
      >
        <p>
          Modern financial products require a modern BaaS platform, Our Banking
          as a Service (BaaS) platform is designed from the ground up to be the
          effective engine that fuels any financial products or services you can
          imagine. It is adaptable, simple to connect to, and infinitely
          scalable.
        </p>
      </HeaderArea>
      <div className="w-10/12 m-auto">
        <p className="text-4xl  font-light my-12">
          Why build with Pavelon’s Baas Platform
        </p>
        <div className="flex  flex-col  md:items-start md:flex-row  gap-12 py-12 justify-center">
          <FeatureSet
            features={[
              {
                faClass: "fa fa-money",
                featureName: "Decoupled ledger = more use cases",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more about Pavelon ledger",
              },
              {
                faClass: "fa fa-money",
                featureName: "Fast and easy  integration ",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Banking, payment and lending products",
              },
              {
                faClass: "fa fa-money",
                featureName: "Partner with multiple banks ",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more",
              },
              {
                faClass: "fa fa-money",
                featureName: "Simple pricing and contracting",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

function FeatureSet({ features }) {
  return (
    <>
      {features.map((perFeature) => (
        <div className="flex flex-col w-64 gap-2">
          {/* <i className="fa-brands fa-font-awesome"></i>{" "} */}
          <Image />
          <p className="text-3xl font-bold">{perFeature.featureName}</p>
          <p className="text-base"> {perFeature.subText}</p>
          <div>
            <Link to={"/"}> {perFeature.link} </Link>
            <i
              style={{ color: "#467ecf" }}
              className={`fa fa-chevron-right `}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}
export default BAAS;
