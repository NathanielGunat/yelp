// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.apiKey,
//   measurementId: process.env.measurementId,
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app };
import Mount_Ulap from "@assets/Mount_Ulap.png";
import Calaguas_Islands from "@assets/Calagus_Islands.jpg";
import Onay_Beach from "@assets/Onay_Beach.jpg";
import Seven_Sisters_Waterfall from "@assets/Seven_Sisters_Waterfall.jpg";
import Latik_Riverside from "@assets/Latik_Riverside.jpg";
import Buloy_Springs from "@assets/Buloy_Springs.jpg";

export const CAMPS = [
  {
    id: "Mount_Ulap",
    name: "Mount Ulap",
    src: Mount_Ulap,
    discription: "One of the most famous hikes in Benguet is Mt Ulap in Itogon",
  },
  {
    id: "Calaguas_Islands",
    name: "Calaguas Islands",
    src: Calaguas_Islands,
    discription:
      " A paradise of islands that can rival the white sand beauty of Boracay.",
  },
  {
    id: "Onay_Beach",
    name: "Onay Beach",
    src: Onay_Beach,
    discription:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
  {
    id: "Seven_Sisters_Waterfall",
    name: "@asset/Seven Sisters Waterfall",
    src: Seven_Sisters_Waterfall,
    discription: "The Seven Sisters is the 39th tallest waterfall in Norway.",
  },
  {
    id: "Latik_Riverside",
    name: "Latik Riverside",
    src: Latik_Riverside,
    discription:
      "Philippines is one of the most dazzling countries in all of Asia.",
  },

  {
    id: "Buloy_Springs",
    name: "Buloy Springs",
    src: Buloy_Springs,
    discription:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
];
