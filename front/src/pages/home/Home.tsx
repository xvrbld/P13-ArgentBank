import styles from "./Home.module.scss";
import Banner from "components/banner/Banner";
import Feature from "components/feature/Feature";
import bannerImg from "assets/bank-tree.jpeg";
import chatIcon from "assets/icon-chat.png";
import moneyIcon from "assets/icon-money.png";
import securityIcon from "assets/icon-security.png";

function Home() {
  return (
    <div className={styles.home}>
      <Banner img={bannerImg} />
      <div className={styles.features}>
        <Feature
          iconSrc={chatIcon}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          iconSrc={moneyIcon}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          iconSrc={securityIcon}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </div>
  );
}

export default Home;
