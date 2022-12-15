// import BoldSection from "../../components/organism/baas";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Link } from "@mui/material";
import { Image, KeyboardArrowRightOutlined, Money } from "@mui/icons-material";
import HeaderArea from "../components/organism/HeaderArea";
import HeaderSubImage from "../components/organism/HeaderSubImage";
import BaasBasicSection from "../components/organism/BaasBasicSection";
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
      {/* <HeaderArea
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
      </HeaderArea> */}
      <HeaderSubImage
        reverse
        subHeader={"We support the full account lifecycle"}
        imageUrl={"/baas/mmk.png"}
        title="Banking as a Service"
      >
        <p>
          Modern financial products require a modern BaaS platform, Our Banking
          as a Service (BaaS) platform is designed from the ground up to be the
          effective engine that fuels any financial products or services you can
          imagine. It is adaptable, simple to connect to, and infinitely
          scalable.
        </p>
      </HeaderSubImage>
      <div className="w-10/12 m-auto">
        <p className="text-4xl  font-light my-12">
          Why build with Pavelon’s Baas Platform
        </p>
        <div className="flex flex-col md:items-start md:flex-row divide-y md:divide-y-0 md:divide-x gap-12 py-12 md:justify-between">
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

      <BaasBasicSection title={"Pavelon Starter Apps"}>
        <ul>
          <li>
            Build beautiful, user-friendly mobile banking experiences quickly
          </li>
          <li>
            Create end-to-end mobile banking experiences for your clients using
            our white label app codebase.
          </li>
          <li>
            Full-featured and compatible with the Pavelon platform right out of
            the box Pavelon can assist with customizations, integrations, and
            other features or customers with a Paveon contract, a free perpetual
            licence
          </li>
        </ul>
      </BaasBasicSection>
      <BaasBasicSection title={"Pavelon Cases"}>
        <p>Easy, seamless workflow management</p>
        <ul>
          <li>
            A complete case management system streamlines administration,
            marketing, and disclosures while reducing risk.
          </li>
          <li>
            Enables simple communication between your bank partner and Pavelon
          </li>
          <li>
            Notifications, automated processes, assignable tasks, and views and
            permissions that are particular to roles minimising physical labour
            and human error
          </li>
          <li>A full history is saved for each case, making audits easier</li>
        </ul>
      </BaasBasicSection>
    </>
  );
};

function FeatureSet({ features }) {
  return (
    <>
      {features.map((perFeature, idx) => (
        <div
          style={{ paddingLeft: !idx ? 0 : "" }}
          className="flex flex-col w-full pt-4 md:pl-8 gap-2"
        >
          {/* <i className="fa-brands fa-font-awesome"></i>{" "} */}
          <Image />
          <p className="text-3xl font-bold">{perFeature.featureName}</p>
          <p className="text-base"> {perFeature.subText}</p>
          <div>
            <KeyboardArrowRightOutlined sx={{ color: "deep blue" }} />
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
