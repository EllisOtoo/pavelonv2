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

const InvestmentAsAService = () => {
  return (
    <>
      <HeaderSubImage
        reverse
        subHeader={"We support the full account lifecycle"}
        imageUrl={"/investmentAsAService/investGoals.png"}
        title="Investment as a Service"
      >
        <p>
          Modern financial products require a modern BaaS platform, Our Banking
          as a Service (BaaS) platform is designed from the ground up to be the
          effective engine that fuels any financial products or services you can
          imagine. It is adaptable, simple to connect to, and infinitely
          scalable.
        </p>
      </HeaderSubImage>
      <div></div>
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
export default InvestmentAsAService;
