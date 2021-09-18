import {Component, OnInit} from '@angular/core';
import {BehanceService} from '../../services/behance.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  experiences: any[];
  portfolio: any;
  education:any[];
  p = 1;

  constructor(private behance: BehanceService) {
    this.experiences = [
     {
        title: 'Software Developer',
        company: 'IKS Health',
        fromDate: {
          year: '2019',
          month: 'Nov'
        },
        toDate: 'Present',
        // tslint:disable-next-line:max-line-length
        description: 'Responsible for developing end to end intelligent solutions for challenging business requirements with the application of various cutting edge technologies. Handling variety of healthcare products with huge data and driving insights out of it to help operations.Developing solutions across a range of business requirements with latest technologies.Production Ready and Maintainable solutions for ensuring high availability and throughput.',
        KeyAchievements : 'Spearheaded transition from traditional legacy tools to latest, more user friendly tools like,GitHub Desktop, VS Code, etc.'
      },
    ];
    this.education = [
      {
        title: 'Post Graduation Diploma in Advance Computing.',
        school: 'CDAC, Kharghar, Navi Mumbai.',
        fromDate: {
          year: '2019',
          month: 'Feb'
        },
        toDate: '',
        // tslint:disable-next-line:max-line-length
        description: 'Responsible for developing end to end intelligent solutions for challenging business requirements with the application of various cutting edge technologies. Handling variety of healthcare products with huge data and driving insights out of it to help operations.Developing solutions across a range of business requirements with latest technologies.Production Ready and Maintainable solutions for ensuring high availability and throughput.',
        KeyAchievements : 'Spearheaded transition from traditional legacy tools to latest, more user friendly tools like,GitHub Desktop, VS Code, etc.'
      },
    ];
    this.get_portfolio();
  }

  get_portfolio() {
    this.behance.getPortfolio().subscribe((response) => {
      this.portfolio = (response) ? response['projects'] : response;
    });
  }

  ngOnInit(): void {
  }

}
