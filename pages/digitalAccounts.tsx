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
import GetStarted from "../components/organism/GetStarted";
// import BAASSection  from "../components/organism/BoldSection";

const DigitalAccounts = () => {
  return (
    <>
      <HeaderSubImage
        noButton
        reverse
        // subHeader={"We support the full account lifecycle"}
        imageUrl={"/digitalAccounts/digitalAccounts.70a6b3c2-2.png"}
        title="Offer GDPC-Insured accounts with a few lines of code"
      ></HeaderSubImage>

      <BaasBasicSection
        title={"Your multi-purpose accounts center"}
        imageUrl={"/digitalAccounts/CurrrentBal.2c4cb23f.png"}
      >
        <>
          <h3 className="font-bold ">Deposit Accounts</h3>
          <p className="mb-12">
            Issue a deposit account and then easily create or modify that
            account. Create multiple accounts for a customer or business,
            whatever you need, quaranteed up to $250,000 FDIC insurance on each
            account. Use the Bond Banking API to build financial products for
            your clients that store funds, such as bank accounts, credit
            accounts, and/or balance accounts.
          </p>

          <h3 className="font-bold">Oversight & Control</h3>
          <p>
            Transfer a balance to and from an Account. Debit or Credit card -
            each account has its own unique number for easy transfers. Charge or
            waive monthly maintenance, overdraft, or transfer fees - at your
            discretion. Use our Banking API to quickly activate and deactivate
            accounts, as you see fit.
          </p>
        </>
      </BaasBasicSection>
      <BaasBasicSection
        title={"Money access, your way"}
        imageUrl={"/digitalAccounts/myTransactions.de914996.png"}
      >
        <>
          <h3 className="font-bold ">Debit Cards</h3>
          <p className="mb-12">
            Easily issue debit cards, physical or virtual, to move money from
            and to Bond deposit accounts. Use them in Apple Pay or Android Pay,
            or in any store.
          </p>

          <h3 className="font-bold">Cash Access</h3>
          <p className="mb-12">
            Enable your customers to deposit or access cash in their deposit
            accounts via ATMs and popular convenience stores like 7-Eleven and
            Walgreens.
          </p>

          <h3 className="font-bold">Early payroll access</h3>
          <p>
            Enable early pay days by making the money available as soon as the
            payor notifies us of the intended deposit - which is often up to 2
            das before most banks make the funds available
          </p>
        </>
      </BaasBasicSection>
      <BaasBasicSection
        title={"Pavelon Ledger"}
        imageUrl={"/digitalAccounts/myTransactions.de914996.png"}
      >
        <p>
          Our Banking and account APIs are supported by Bond Ledger, a
          world-class, universal ledger system where you can capture any
          information related to account balance, upcoming transactions,
          transaction history and statuses. Receive notifications every time the
          account has a transaction. Quickly build your own statements by
          pulling data based on payment frequency using our Accounts API and
          best practice guides. Monitor and categorize expenses for budgeting.
          View your account balance, upcoming transactions, and transaction
          history in our a visual dashboard within Bond Portal. Ledger's
          accounting engine offers double entry accounting for all sub-accounts,
          including end of month and end of day transaction clearing.
          Additionally, Ledger's internal transaction engine was built with the
          ISO 8583 specification.
        </p>
      </BaasBasicSection>
      <GetStarted />
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
export default DigitalAccounts;
