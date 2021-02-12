import { Component, OnInit } from "@angular/core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cover-letter",
  templateUrl: "./cover-letter.component.html",
  styleUrls: ["./cover-letter.component.scss"],
})
export class CoverLetterComponent implements OnInit {
  public coverLetter: any;

  constructor() {}

  ngOnInit(): void {
    this.setCoverLetterData();
  }

  setCoverLetterData() {
    this.coverLetter = {
      name: "Jaykumar Prajapati",
      img: "/assets/images/IMG_0180.jpg",
      positionTitle: "Developer Programmer",
      leftInfo: [
        {
          title: "Contact",
          contents: [
            {
              icon: faMapMarkerAlt,
              title: "Address",
              content: "U 3 316, Hampstead Road, Clearview, SA - 5085",
            },
            {
              icon: faPhoneAlt,
              title: "Phone",
              content: "+61 480 124 164",
            },
            {
              icon: faEnvelope,
              title: "Email",
              content: "prajapatijay61@gmail.com",
            },
            {
              icon: faLinkedinIn,
              title: "LinkedIn",
              content: "linkedin.com/in/jaykumar-prajapati-21684a70",
            },
          ],
        },
      ],
      rightInfo: [
        {
          icon: faUserAlt,
          title: "To whom it may concern",
          contents: [
            {
              content: ``,
            },
          ],
        },
      ],
    };
  }
}
