// import BoldSection from "../../components/organism/baas";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Link } from "@mui/material";
import { KeyboardArrowRightOutlined, Money } from "@mui/icons-material";
import HeaderArea from "../components/organism/HeaderArea";
import HeaderSubImage from "../components/organism/HeaderSubImage";
import BaasBasicSection from "../components/organism/BaasBasicSection";
import Image from "next/image";
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

const CapitalByAPI = () => {
  return (
    <>
      <HeaderSubImage
        reverse
        // subHeader={"We support the full account lifecycle"}
        imageUrl={"/baas/mmk.png"}
        title="Lend Money to your users at scale"
      >
        <p>
          Easily embed credit products within your core experience and give your
          customers seamless access to the capital they need to grow.
        </p>
      </HeaderSubImage>

      <BaasBasicSection title={"How it Works"}>
        <p>
          Pavelon provides platforms with an end-to-end lending API that enables
          you to offer access to fast and flexible financing to help your
          customers grow their businesses.
        </p>
        <ul>
          <li>Scales in real-time</li>
          <li>Instant eligibility</li>
          <li>Seamless for your users</li>
          <li>One-click payout</li>
          <li>Fully embedded</li>
          <li>Transparent pricing</li>
        </ul>
      </BaasBasicSection>
      <BaasBasicSection title={"Become a source of capital for your customers"}>
        <p>
          Pavelon provides platforms with an end-to-end lending API that enables
          you to offer access to fast and flexible financing to help your
          customers grow their businesses.
        </p>
      </BaasBasicSection>
      <BaasBasicSection
        title={"Building credit products has never been easier"}
      >
        <p>
          Only Pavelon’s embedded credit platform gives companies everything
          they need to build, embed or enhance credit products.
        </p>
      </BaasBasicSection>
      <BaasBasicSection
        title={"Get to market faster, no fintech experience required"}
      >
        <p>
          From credit cards to Buy-Now-Pay-Later and B2B payments, Pavelon can
          help you build and launch credit products in minutes, not months. One
          single API, one contract and you’re ready to go live with a full
          credit operation.
        </p>
      </BaasBasicSection>
      <FeatureSet
        features={[
          {
            featureName: "Everything you need to embed credit products",
            list: [
              "One-stop-shop for acquisition, underwriting, origination, and onboarding",
              "Specialized lender marketplace across multiple industries",
              "Expert funding advisors",
              "Flexible platform to enhance, build, embed financial products",
            ],
            src: "/capitalByApi/credit-card.9513b21c.png",
          },
          {
            featureName: "Everything you need to embed credit products",
            list: [
              "One-stop-shop for acquisition, underwriting, origination, and onboarding",
              "Specialized lender marketplace across multiple industries",
              "Expert funding advisors",
              "Flexible platform to enhance, build, embed financial products",
            ],
            src: "/capitalByApi/hand.cd1fa270.png",
          },
        ]}
      />
    </>
  );
};

function FeatureSet({ features }) {
  return (
    <div className="w-full bg-gray-100">
      <div className="py-12 flex flex-col md:flex-row md:w-10/12 md:gap-20 m-auto">
        {features.map((each, idx) => (
          <div
            style={{ paddingLeft: !idx ? 0 : "" }}
            className="flex flex-col w-10/12 m-auto pt-4 md:pl-8 gap-8"
          >
            {/* <i className="fa-brands fa-font-awesome"></i>{" "} */}
            <div className="flex divide-x gap-4">
              <div className="relative h-12 w-24 md:w-12">
                <Image alt="image" fill src={each.src} />
              </div>
              <p className="text-2xl pl-4">{each.featureName}</p>
            </div>

            <ul className="list-disc ml-20">
              {each.list.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CapitalByAPI;
