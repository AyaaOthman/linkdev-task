import { Component, Input } from '@angular/core';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() news: News = {
    id: '4',
    title:
      'Link Development Lands Three New Microsoft Advanced Specializations                    ',
    content:
      '<strong>Delivering Certified Modern Work Communications and Security Solutions</strong>\r\nLink Development, the global technology solutions provider and an A15 Holding company, unveiled today it has recently earned additional three Microsoft advanced specializations:  Calling for Microsoft Teams, Microsoft Information Protection and Governance, and Microsoft Identity and Access Management. The new achievements underscore the technical competencies of the company and its certified teams in delivering bespoke, complex communications and security solutions.  \r\nThe Microsoft Calling in Teams advanced specializations proves the company’s expertise in deploying and managing complex Microsoft 365 Phone and Voice solutions. This includes network remediation, O365 service deployment, telephone number provisioning/porting, device deployment and more.\r\nThe Microsoft Identity and Access Management advanced specialization attests to the Link Development’ excellence in deploying Microsoft Identity workloads with Azure Active Directory to protect enterprises from threats to identity, data, apps, infrastructure, network, and endpoints and more.',
    categoryID: '3',
    urlToImage:
      'https://linkdevelopment.com/app/uploads/2021/09/ThreeMSSpecializations_Newsroom.jpg',
    publishedDate: '2022-05-21',
    showOnHomepage: 'yes',
    description: '',
  };
  ngOnInit() {
    console.log('this is news', this.news);
  }
}
