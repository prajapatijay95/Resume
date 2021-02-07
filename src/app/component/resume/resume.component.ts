import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faUserAlt,
  faPen,
  faLink,
  faLaptopCode,
  faAward,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resume: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.setResumeData();
  }

  setResumeData() {
    this.resume = {
      name: 'Jaykumar Prajapati',
      img: '/assets/images/IMG_0180.jpg',
      positionTitle: 'Developer Programmer',
      pages: [
        {
          lstyle: '',
          rstyle: '',
          leftInfo: [
            {
              title: 'Contact',
              contents: [
                {
                  icon: faMapMarkerAlt,
                  title: 'Address',
                  content: 'U 3 316, Hampstead Road, Clearview, SA - 5085'
                },
                {
                  icon: faPhoneAlt,
                  title: 'Phone',
                  content: '+61 480 124 164'
                },
                {
                  icon: faEnvelope,
                  title: 'Email',
                  content: 'prajapatijay61@gmail.com'
                },
                {
                  icon: faLinkedinIn,
                  title: 'LinkedIn',
                  content: 'linkedin.com/in/jaykumar-prajapati-21684a70'
                }
              ]
            },
            {
              title: 'Education',
              contents: [
                {
                  title: 'Master Degree',
                  content: 'SASTRA University, India <br/> 2015-2018'
                },
                {
                  title: 'Bachelor Degree',
                  content: 'Dharmsinh Desai University, India <br/> 2012-2015'
                }
              ]
            }
          ],
          rightInfo: [
            {
              icon: faUserAlt,
              title: 'Profile',
              contents: [
                {
                  content: `My goal is to work with an organization where I can apply my knowledge and skills. These would be beneficial for the company and my personal experience. I am growing professionally with every engagement and believe there is a lot that I can contribute. Finally, looking forward to work in an organization, where I can utilize my knowledge and discharge responsibilities assigned to me in the best possible manner, thereby resulting in a relationship of mutual growth.`
                }
              ]
            },
            {
              icon: faCogs,
              title: 'Skills',
              contents: [
                {
                  content: `
                  <li>Full-stack developer</li>
                  <li>Decision making</li>
                  <li>Strategic thinking</li>
                  <li>Team management</li>
                  <li>Problem solving</li>
                `
                }
              ]
            },
            {
              icon: faLaptopCode,
              title: 'Expertize',
              contents: [
                {
                  content: `
                  <li>Angular 5+</li>
                  <li>Node.js</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Charts</li>
                  <li>SQl | NoSQL Database</li>
                `
                }
              ]
            }
          ]
        },
        {
          rstyle: 'fhw',
          rightInfo: [
            {
              icon: faPen,
              title: 'Work Experience',
              contents: [
                {
                  title: 'Developer Programmer',
                  content: `
                <strong>Tata Consultancy Services Limited | Jun 2015 - Present</strong> <br /><br />
                Followings are my overall Roles & Responsibilities for the projects listed below:
                <li>Team Leader</li>
                <li>Get the requirements</li>
                <li>Develop the application</li>
                <li>Application testing</li>
                <li>Maintain the technical documents</li>
                <li>Co-ordination with business</li>
                <br />
                Australia | Jul 2020 - Present <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Integrated Risk Register (IRR)</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>The IRR is the one-stop shop for operational risk management, allowing all risks for a particular asset to be readily and clearly visible to users. There are three different types of risks that are captured in the IRR, these are significant hazards, which are the ever-present and the reality of doing business in the hydrocarbon industry. Significant hazards are identified up front and are not a business risk if the controls remain effective.</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                    <ul>
                      <li>Angular 10</li>
                      <li>C#</li>
                      <li>OData</li>
                      <li>Sql Server</li>
                      <li>Kendo UI</li>
                      <li>Ag-Grid</li>
                      <li>SAP S/4HANA</li>
                      <li>Workflow Engine</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Jira</li>
                        <li>Git</li>
                        <li>SQL Server management studio</li>
                      </ul>
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
                    <td>Visualize the daily carbon emission report using the data coming from the EnergySys application. Where business is having a feature to compare it with historical data with calculated estimated and average values by area.</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>Angular 10</li>
                        <li>C#</li>
                        <li>OData</li>
                        <li>EnergySys</li>
                        <li>HighCharts</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Jira</li>
                        <li>Git</li>
                        <li>SQL Server management studio</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                `
                }
              ]
            }
          ]
        },
        {
          rstyle: 'fhw',
          rightInfo: [
            {
              icon: faPen,
              title: 'Work Experience',
              subTitle: 'Continued',
              contents: [
                {
                  title: '',
                  content: `
                Australia | Jan 2020 - Mar 2020 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Performance Dashboard</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>Visualize the company performance using the risk and production data using the HighCharts.</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>Angular 8</li>
                        <li>C#</li>
                        <li>Sql Server</li>
                        <li>Kendo UI</li>
                        <li>HighCharts</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Jira</li>
                        <li>Git</li>
                        <li>SQL Server management studio</li>
                      </ul>
                    </td>
                  </tr>
                </table> <br />
                India | Australia | Jul 2018 - Dec 2019 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Forms Portal</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>The Forms Portal application is the one-stop shop for all the organization-wide forms, where each form are having their separate workflow(s).</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>Angular 8</li>
                        <li>C#</li>
                        <li>Sql Server</li>
                        <li>Kendo UI</li>
                        <li>Ag-Grid</li>
                        <li>Workflow Engine</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Jira</li>
                        <li>Git</li>
                        <li>SQL Server management studio</li>
                      </ul>
                    </td>
                  </tr>
                </table> <br />
                India | Jan 2018 - Jun 2018 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Geospatial Crowdsourcing</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>The Geospatial Crowdsourcing is a platform where people can mark the places, boundaries, roads which are famous for their locations and these data can be used to identify the famous places in the remote areas.</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>OpenLayers</li>
                        <li>Java</li>
                        <li>Hibernate</li>
                        <li>MySql</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>NetBeans</li>
                        <li>SQL Workbench</li>
                        <li>Git</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                `
                }
              ]
            }
          ]
        },
        {
          rstyle: 'fhw',
          rightInfo: [
            {
              icon: faPen,
              title: 'Work Experience',
              subTitle: 'Continued',
              contents: [
                {
                  title: '',
                  content: `
                India | Jul 2017 - Dec 2017 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Facial Recognition</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>Facial Recognition is a project created using the combination of OpenCV & TensorFlow to fill the attendance.</td>
                  </tr>
                  <tr>
                  <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>Python 2.6</li>
                        <li>Flask</li>
                        <li>OpenCV</li>
                        <li>TensorFlow</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>Pie Charm</li>
                        <li>Git</li>
                      </ul>
                    </td>
                  </tr>
                </table> <br />
                India | Jul 2016 - Jun 2017 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>Sound Crowdsourcing</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>The Sound Crowdsourcing project created to collect the sounds of different regions of India and create a Speech to Text translator.</td>
                  </tr>
                  <tr>
                    <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Java</li>
                        <li>Hibernate</li>
                        <li>MySql</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>NetBeans</li>
                        <li>SQL Workbench</li>
                        <li>SVN</li>
                      </ul>
                    </td>
                  </tr>
                </table> <br />
                India | Jun 2015 - Jun 2016 <br/>
                <table>
                  <tr>
                    <td>Project name</td>
                    <td>India Portal</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>The India Portal is a project where anyone can come and get all the information about India on all the levels like state, district, and village. The information can be about industries, interesting places, regional places, population, etc.</td>
                  </tr>
                  <tr>
                    <td>Used Technologies</td>
                    <td>
                      <ul>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Java</li>
                        <li>Mongo DB</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>
                      <ul>
                        <li>NetBeans</li>
                        <li>Robomongo</li>
                        <li>SVN</li>
                      </ul>
                    </td>
                  </tr>
                </table> <br />
                `
                }
              ]
            }
          ]
        },
        {
          lstyle: 'fh',
          rstyle: 'fh',
          leftInfo: [
            {
              // icon: faAward,
              title: 'Awards',
              contents: [
                {
                  title: 'On The Spot Award',
                  content: 'Awards for Excellence | Sep 2020'
                },
                {
                  title: 'On The Spot Award',
                  content: 'Awards for Excellence | Jul 2020'
                },
                {
                  title: 'Service & Commitment Award',
                  content: 'Service Awards | Jun 2020'
                },
                {
                  title: 'Star of the Month Award',
                  content: 'Awards for Excellence | Jan 2020'
                },
                {
                  title: 'Best Team Award',
                  content: 'Awards for Excellence | May 2019'
                },
                {
                  title: 'Service & Commitment Award',
                  content: 'Service Awards | Jun 2018'
                },
                {
                  title: 'Fresco Play Miles',
                  content: 'Learning Awards | Jan 2018'
                },
                {
                  title: 'Fresco Play Miles',
                  content: 'Learning Awards | Jan 2018'
                },
                {
                  title: 'Fresco Play Miles',
                  content: 'Learning Awards | Nov 2017'
                },
                {
                  title: 'Best Team Award',
                  content: 'Awards for Excellence | Aug 2017'
                },
                {
                  title: 'Fresco Play Miles',
                  content: 'Learning Awards | Jul 2017'
                }
              ]
            }
          ],
          rightInfo: [
            {
              icon: faLink,
              title: 'References',
              contents: [
                {
                  title: 'Shamprasad Shetty',
                  content: `Associate Consultant <br/ >
                        Tata Consultancy Services Limited <br />
                        <strong>P</strong>: +61 470 621 060 <br />
                        <strong>E</strong>: sp.shetty@tcs.com`
                },
                {
                  title: 'Christian Trigg',
                  content: `Technical System Analyst <br/ >
                        Santos Limited <br />
                        <strong>P</strong>: +61 421 789 225 <br />
                        <strong>E</strong>: christian.trigg@santos.com`
                },
                {
                  title: 'Ref 3',
                  content: `Technical System Analyst <br/ >
                        Santos Limited <br />
                        <strong>P</strong>: +61 421 789 225 <br />
                        <strong>E</strong>: christian.trigg@santos.com`
                },
                {
                  title: 'Ref 4',
                  content: `Technical System Analyst <br/ >
                        Santos Limited <br />
                        <strong>P</strong>: +61 421 789 225 <br />
                        <strong>E</strong>: christian.trigg@santos.com`
                }
              ]
            }
          ]
        }
      ]
    };
  }

  sanitizeHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
