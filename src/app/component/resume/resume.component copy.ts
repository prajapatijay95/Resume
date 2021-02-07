import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faUserAlt,
  faPen,
  faLink,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  public resume: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.setResumeData();
  }

  setResumeData() {
    this.resume = {
      name: "Jaykumar Prajapati",
      img: "/assets/images/Jaykumar.jpg",
      positionTitle: "Developer Programmer",
      page1: {
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
                content: "linked in URL",
              },
            ],
          },
          {
            title: "Education",
            contents: [
              {
                title: "Master Degree",
                content: "SASTRA University, India <br/> 2015-2018",
              },
              {
                title: "Bachelor Degree",
                content: "Dharmsinh Desai University, India <br/> 2012-2015",
              },
            ],
          },
          {
            title: "Skills",
            contents: [
              {
                content: `
                  <li>Full-stack developer</li>
                  <li>Decision making</li>
                  <li>Strategic thinking</li>
                  <li>Team management</li>
                  <li>Problem solving</li>
                `,
              },
            ],
          },
          {
            title: "Expertize",
            contents: [
              {
                content: `
                  <li>Angular 5+</li>
                  <li>Node.js</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Charts</li>
                  <li>SQl | NoSQL Database</li>
                `,
              },
            ],
          },
        ],
        rightInfo: [
          {
            icon: faUserAlt,
            title: "Profile",
            contents: [
              {
                content: `My goal is to work with an organization where I can apply my knowledge and skills. These would be beneficial for the company and my personal experience. I am growing professionally with every engagement and believe there is a lot that I can contribute. Finally, looking forward to work in an organization, where I can utilize my knowledge and discharge responsibilities assigned to me in the best possible manner, thereby resulting in a relationship of mutual growth.`,
              },
            ],
          },
          {
            icon: faAward,
            title: "Awards",
            contents: [
              {
                title: "On The Spot Award",
                content: "Awards for Excellence | Sep 2020",
              },
              {
                title: "On The Spot Award",
                content: "Awards for Excellence | Jul 2020",
              },
              {
                title: "Service & Commitment Award",
                content: "Service Awards | Jun 2020",
              },
              {
                title: "Star of the Month Award",
                content: "Awards for Excellence | Jan 2020",
              },
              {
                title: "Best Team Award",
                content: "Awards for Excellence | May 2019",
              },
              {
                title: "Service & Commitment Award",
                content: "Service Awards | Jun 2018",
              },
              {
                title: "Fresco Play Miles",
                content: "Learning Awards | Jan 2018",
              },
              {
                title: "Fresco Play Miles",
                content: "Learning Awards | Jan 2018",
              },
              {
                title: "Fresco Play Miles",
                content: "Learning Awards | Nov 2017",
              },
              {
                title: "Best Team Award",
                content: "Awards for Excellence | Aug 2017",
              },
              {
                title: "Fresco Play Miles",
                content: "Learning Awards | Jul 2017",
              },
            ],
          },
        ],
      },
      page2: {
        leftInfo: [],
        rightInfo: [
          {
            icon: faPen,
            title: "Work Experience",
            contents: [
              {
                title: "Developer Programmer | Tata Consultancy Services",
                content: `
                Australia | Jul 2020 - Present <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Integrated Risk Register</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project, user can create multiple type of risk and go to proper approval stage depending on the risk, and migrated the data to SAP S/4HANA.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                      <li>Application testing</li>
                      <li>Maintain the technical documents</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Angular 9</li>
                      <li>C#</li>
                      <li>OData</li>
                      <li>Sql Server</li>
                      <li>Kendo UI</li>
                      <li>Ag-Grid</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Visual Studio Code</li>
                      <li>Visual Studio</li>
                      <li>Jira</li>
                      <li>Git</li>
                      <li>SQL Server management studio</li>
                    </td>
                  </tr>
                </table> <br />
                Australia | Apr 2020 - Jun 2020 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Carbon Emission Report</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>Latest carbon emission data will be visible to the users and user can compare it with the historical data by retriving the data from EnergySys.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                      <li>Application testing</li>
                      <li>Maintain the technical documents</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Angular 9</li>
                      <li>C#</li>
                      <li>OData</li>
                      <li>Sql Server</li>
                      <li>Kendo UI</li>
                      <li>Ag-Grid</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Visual Studio Code</li>
                      <li>Visual Studio</li>
                      <li>Jira</li>
                      <li>Git</li>
                      <li>SQL Server management studio</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | Jan 2020 - Mar 2020 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Performance Dashboard</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project user can see the live dashboard for EHS, Operational and financial information.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                      <li>Application testing</li>
                      <li>Maintain the technical documents</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Angular 5</li>
                      <li>C#</li>
                      <li>Sql Server</li>
                      <li>Kendo UI</li>
                      <li>Ag-Grid</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Visual Studio Code</li>
                      <li>Visual Studio</li>
                      <li>Jira</li>
                      <li>Git</li>
                      <li>SQL Server management studio</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | Jul 2018 - Dec 2019 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Forms Portal</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project we will provide the different forms to the user to get site data.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                      <li>Application testing</li>
                      <li>Maintain the technical documents</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Angular 5</li>
                      <li>C#</li>
                      <li>Sql Server</li>
                      <li>Kendo UI</li>
                      <li>Ag-Grid</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Visual Studio Code</li>
                      <li>Visual Studio</li>
                      <li>Jira</li>
                      <li>Git</li>
                      <li>SQL Server management studio</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | Jul 2017 - Dec 2017 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Facial Recognition</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project, user can take their attendance using their facial bio metrics.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Python 2.6</li>
                      <li>Flask</li>
                      <li>OpenCV</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Pie Charm</li>
                      <li>Git</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | Jan 2018 - Jun 2018 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Geospatial Crowdsourcing</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project user will be crowdsourcing the geospatial data.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Angular 2</li>
                      <li>Hibernate</li>
                      <li>MySql</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>PiNetBeans</li>
                      <li>Robomongo</li>
                      <li>SQL Workbench</li>
                      <li>Git</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | Jul 2017 - Dec 2017 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Facial Recognition</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project, user can take their attendance using their facial bio metrics.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                    </td>
                  </tr>
                  <tr>
                  <td>Used Languages / Framework</td>
                    <td>
                      <li>Python 2.6</li>
                      <li>Flask</li>
                      <li>OpenCV</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>Pie Charm</li>
                      <li>Git</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | 2016 - 2017 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Sound Analysis</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project, user will record the voice and project will analyse the recorded audio.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Used Languages / Framework</td>
                    <td>
                      <li>HTML 5</li>
                      <li>CSS</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>Python</li>
                      <li>Hibernate</li>
                      <li>MySql</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>NetBeans</li>
                      <li>SQL Workbench</li>
                      <li>SVN</li>
                    </td>
                  </tr>
                </table> <br />
                Tata Consultancy Services | India | 2015 - 2016 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>India Portal</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>In this project, user can get all the information about India for all the level like state, district, taluka and village.</td>
                  </tr>
                  <tr>
                    <td>Responsibilities</td>
                    <td>
                      <li>Team Leader</li>
                      <li>Get the requirements</li>
                      <li>Develop the application</li>
                      <li>Data gathering</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Used Languages / Framework</td>
                    <td>
                      <li>HTML 5</li>
                      <li>CSS</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>Mongo DB</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <li>NetBeans</li>
                      <li>Robomongo</li>
                      <li>SVN</li>
                    </td>
                  </tr>
                </table> <br />
                `,
              },
            ],
          },
          {
            icon: faLink,
            title: "References",
            contents: [],
          },
        ],
      },
    };
  }

  sanitizeHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
