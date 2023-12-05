import "./App.css";
import Binny from "./img/binnyVersion1.png";
import TuniLogo from "./img/tuni-logo-valkea.png";
import Android1 from "./img/Android_Askbinny_1.png";
import Android2 from "./img/Android_Askbinny_2.png";
import Android3 from "./img/Android_Askbinny_3.png";
import Android4 from "./img/Android_Askbinny_4.png";
import Android5 from "./img/Android_Askbinny_5.png";
import Android6 from "./img/Android_Askbinny_6.png";
import IOS1 from "./img/iPhone_Askbinny_1.png";
import IOS2 from "./img/iPhone_Askbinny_2.png";
import IOS3 from "./img/iPhone_Askbinny_3.png";
import IOS4 from "./img/iPhone_Askbinny_4.png";
import IOS5 from "./img/iPhone_Askbinny_5.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Info() {
  return (
    <div className="App">
      <div className="infoPageContent">
        <h2>General information on Ask Binny</h2>
        <div className="about">
          <p className="question">About Ask Binny</p>
          <KeyboardDoubleArrowDownIcon className="arrowImage" />

          <div className="aboutContent">
            <p>
              Welcome to Ask Binny! Ask Binny is a digital application designed
              to address and simplify the often-complex task of waste sorting
              for students. With Ask Binny, students now have access to
              centralised information, clarification of where and how to sort,
              and the confidence to determine the appropriate disposal method
              for their waste. Our aim is to increase student engagement and the
              effectiveness of TAMK's recycling initiatives.
            </p>
            <img src={Binny} alt="trashcan" className="infopage-binny" />
            <p className="binnyIntroduction">
              Meet "Binny", the friendly face of "Ask Binny" and your personal
              guide to responsible waste sorting! Binny isn't just any bin –
              he's an embodiment of TAMK's commitment to a greener future. With
              a spirited personality and a wealth of knowledge on recycling,
              Binny is ready to assist you in distinguishing between plastics,
              solids, biodegradables, and more. Whenever you're in doubt, just
              Ask Binny!
            </p>
          </div>
        </div>
        <div className="icon">
          <p className="question">How to make Ask Binny an icon</p>
          <KeyboardDoubleArrowDownIcon className="arrowImage" />
          <div className="iconContent">
            <p>
              Here are instructions on how to make Ask Binny your everyday
              helper around campus.
            </p>

            <p className="question">Android</p>
            <img src={Android1} alt="android1" className="tutorial" />
            <p>Open Chrome and go to ​</p>
            <a href="http://3.122.51.106/askBinny" className="binnyLink">
              Ask Binny's site
            </a>
            <p></p>
            <img src={Android2} alt="android2" className="tutorial" />
            <p>Tap the menu icon (3 dots in upper right-hand corner)​</p>
            <img src={Android3} alt="android3" className="tutorial" />
            <p>Tap ”Add to home screen.”​</p>
            <img src={Android4} alt="android4" className="tutorial" />
            <p>Write “AskBinny” as the name of the app and click Add.​</p>
            <img src={Android5} alt="android5" className="tutorial" />
            <p>Click ”Add to Home Screen.”​</p>
            <img src={Android6} alt="android6" className="tutorial" />
            <p>
              Chrome will add it to your home screen. Go to home screen to see
              the app icon.​
            </p>

            <p className="question">IOS</p>
            <img src={IOS1} alt="ios1" className="tutorial" />
            <p>Open Safari and go to</p>
            <a href="http://3.122.51.106/askBinny" className="binnyLink">
              Ask Binny's site
            </a>
            <p></p>
            <img src={IOS2} alt="ios2" className="tutorial" />
            <p>Tap the Share button on the bottom of the page.​</p>
            <img src={IOS3} alt="ios3" className="tutorial" />
            <p>
              In the list of options, scroll down and tap “Add to Home Screen”.
              ​
            </p>
            <img src={IOS4} alt="ios4" className="tutorial" />
            <p>Write “AskBinny” as the name of the app and click Add.​</p>
            <img src={IOS5} alt="ios5" className="tutorial" />
            <p>
              Safari will close automatically and you will be taken to where the
              AskBinny icon is located on your home screen.​
            </p>
          </div>
        </div>
        <div className="faq">
          <p className="question">FAQ</p>
          <KeyboardDoubleArrowDownIcon className="arrowImage" />
          <div className="faqContent">
            <p className="question">How much does this cost?</p>
            <p className="answer">
              It is free to use for anyone who is visiting, working or studying
              in Tampere University of Applied Sciences
            </p>
            <p className="question">Do I need to sign into the website?</p>
            <p className="answer">
              You do not need to sign in nor connect to the intranet to use the
              service. We want the service to be useful for anyone who ever
              enters Tampere University of Applied Sciences.
            </p>
            <p className="question">
              How do I benefit from using this website?
            </p>
            <p className="answer">
              No more confusion about where and how to sort! Binny the bin will
              help you to recycle your waste properly, telling you in which bin
              your waste goes and where are the bins for that. You can use the
              information you learn from the app outside of campus area as well.
            </p>
            <p className="question">How does this work?</p>
            <p className="answer">
              Binny the bin is meant to be your personal waste sorting assistant
              right in your pocket! Whenever you are having doubts on where and
              how to sort your own waste around Tampere University of Applied
              Sciences campus, Binny will assist you.
            </p>
            <p className="question">How can I find this website?</p>
            <p className="answer">
              There will be provided links within Tampere University of Applied
              Sciences' own information channels (including intranet) as well as
              there will be QR-codes spread around campus' recycling centers. It
              is also hoped that the students can help each other on finding
              these if needed
            </p>
            <p className="question">Why is this made?</p>
            <p className="answer">
              We found out that recycling is not as easy as one might think.
              After surveys we made to students and staff in TAMK, we noticed
              the need for this site. We want to make sure that the information
              is easy to understand and that it does not take too much of one’s
              time. Finally, TAMK University has an Ekokompassi certificate that
              we need to preserve and make TAMK more sustainable.
            </p>
          </div>
        </div>
        <div className="socialMediaAndLinks">
          <p className="question">Links and more information</p>
          <KeyboardDoubleArrowDownIcon className="arrowImage" />
          <div className="socialContent">
            <p>
              Information on waste management around campus (Tuni credentials
              are reuired)
            </p>
            <a
              href="https://intra.tuni.fi/en/campuses-and-facilities/facilities-services/waste-management"
              className="binnyLink"
            >
              Link to Intranet
            </a>
            <p>Social media links:</p>
            <p>LinkedIn Tampere University:</p>
            <a
              href="https://www.linkedin.com/school/tampere-university/"
              className="binnyLink"
            >
              LinkedIn
            </a>
            <p> LinkedIn TAMK:</p>
            <a
              href="https://www.linkedin.com/school/tamk"
              className="binnyLink"
            >
              LinkedIn
            </a>
            <p>Facebook Tampere University (@TampereUniversity):</p>
            <a
              href="https://www.facebook.com/TampereUniversity"
              className="binnyLink"
            >
              Facebook
            </a>
            <p>
              Facebook TAMK – Tampere University of Applied Sciences
              (@tampereenamk):
            </p>
            <a
              href="https://www.facebook.com/tampereenamk"
              className="binnyLink"
            >
              Facebook
            </a>
            <p>Instagram Tampere University:</p>
            <a
              href="https://www.instagram.com/TampereUni"
              className="binnyLink"
            >
              Instagram
            </a>
            <p>Instagram TAMK UAS:</p>
            <a href="https://www.instagram.com/tamk_uas" className="binnyLink">
              Instagram
            </a>
            <p>Twitter Tampere University:</p>
            <a href="https://twitter.com/TampereUni" className="binnyLink">
              Twitter/X
            </a>
            <p>Twitter TAMK UAS:</p>
            <a href="https://twitter.com/TAMK_UAS" className="binnyLink">
              Twitter/X
            </a>
            <p>Youtube Tampere University: </p>
            <a
              href="https://www.youtube.com/@TampereUniversity"
              className="binnyLink"
            >
              Youtube
            </a>
            <p>Youtube TAMK: </p>
            <a
              href="https://www.youtube.com/@tamk-tampereuniversityofap6601"
              className="binnyLink"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={TuniLogo} alt="Tuni logo" className="TuniLogo" />
      </div>
    </div>
  );
}
export default Info;
