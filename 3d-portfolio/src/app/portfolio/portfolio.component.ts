import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Profile, SocialMedia } from '../model/profile.model';
import { WorkExperience } from '../model/work-experience.model';
import { Skill } from '../model/skills.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  totalPages: number = 0;
  pageNumber: number = 0;
  imgUrl: any[] = [];

  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.setupEventListeners();
    this.totalPages = this.getPageCount();
    this.setupOpeningAnimation();
    this.imgUrl = ['assets/photo.jpg', 'assets/portfolio.jpg'];
    this.loadProfile();
    this.loadWorkExperience();
    this.loadSkills();
  }

  private setupEventListeners(): void {
    const pageTurnBtn =
      document.querySelectorAll<HTMLSpanElement>('.nextprev-btn');

    pageTurnBtn.forEach((el, index) => {
      el.onclick = () => this.handlePageTurn(el, index);
    });

    const contactMeBtn =
      document.querySelector<HTMLAnchorElement>('.btn.contact-me');
    if (contactMeBtn) {
      contactMeBtn.onclick = () => this.handleContactMe();
    }

    const backProfileBtn =
      document.querySelector<HTMLAnchorElement>('.back-profile');
    if (backProfileBtn) {
      backProfileBtn.onclick = () => this.handleBackProfile();
    }
  }

  private handlePageTurn(el: HTMLSpanElement, index: number): void {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId!);

    if (pageTurn) {
      if (pageTurn.classList.contains('turn')) {
        pageTurn.classList.remove('turn');
        setTimeout(() => {
          pageTurn.style.zIndex = `${2 - index}`;
        }, 500);
      } else {
        pageTurn.classList.add('turn');
        setTimeout(() => {
          pageTurn.style.zIndex = `${2 + index}`;
        }, 500);
      }
    }
  }

  private handleContactMe(): void {
    const pages = document.querySelectorAll<HTMLDivElement>(
      '.book-page.page-right'
    );
    pages.forEach((page, index) => {
      setTimeout(() => {
        page.classList.add('turn');
        setTimeout(() => {
          page.style.zIndex = `${20 + index}`;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  }

  private reverseIndex(): void {
    this.pageNumber--;
    if (this.pageNumber < 0) {
      this.pageNumber = this.totalPages - 1;
    }
  }

  private handleBackProfile(): void {
    const pages = document.querySelectorAll<HTMLDivElement>(
      '.book-page.page-right'
    );
    pages.forEach((_, index) => {
      setTimeout(() => {
        this.reverseIndex();
        const currentPage = pages[this.pageNumber];
        if (currentPage) {
          currentPage.classList.remove('turn');
          setTimeout(() => {
            this.reverseIndex();
            currentPage.style.zIndex = `${10 + index}`;
          }, 500);
        }
      }, (index + 1) * 200 + 100);
    });
  }

  private setupOpeningAnimation(): void {
    const coverRight =
      document.querySelector<HTMLDivElement>('.cover.cover-right');
    const pageLeft = document.querySelector<HTMLDivElement>(
      '.book-page.page-left'
    );

    setTimeout(() => {
      if (coverRight) {
        coverRight.classList.add('turn');
      }
    }, 2100);

    setTimeout(() => {
      if (coverRight) {
        coverRight.style.zIndex = '-1';
      }
    }, 2800);

    const pages = document.querySelectorAll<HTMLDivElement>(
      '.book-page.page-right'
    );
    pages.forEach((_, index) => {
      setTimeout(() => {
        this.reverseIndex();
        const currentPage = pages[this.pageNumber];
        if (currentPage) {
          currentPage.classList.remove('turn');
          setTimeout(() => {
            this.reverseIndex();
            currentPage.style.zIndex = `${10 + index}`;
          }, 500);
        }
      }, (index + 1) * 200 + 2100);
    });
  }

  private getPageCount(): number {
    return document.querySelectorAll<HTMLDivElement>('.book-page.page-right')
      .length;
  }

  // data
  profile: Profile | null = null;
  socialMediaLinks: SocialMedia[] = [];

  loadProfile() {
    this.appService.getProfiles().subscribe(
      (response) => {
        this.profile = response[0];
        if (typeof this.profile.social_media === 'string') {
          const parsedSocialMediaArray = JSON.parse(this.profile.social_media);
          this.socialMediaLinks = parsedSocialMediaArray.map((item: any) => {
            const key = Object.keys(item)[0];
            return {
              class: item[key].class,
              link: item[key].link,
            } as SocialMedia;
          });
        }
        console.log(this.profile);
        console.log(this.socialMediaLinks);
      },
      (error) => {
        console.error('Error loading profiles:', error);
      }
    );
  }

  workExperiences: WorkExperience[] = [];

  loadWorkExperience() {
    this.appService.getWorkExperiences().subscribe(
      (response) => {
        this.workExperiences = response;
        console.log(response);
      },
      (error) => {
        console.error('Error loading work experiences:', error);
      }
    );
  }

  skills: Skill[] = [];
  skillsGroupedByType: { [type: string]: Skill[] } = {};

  loadSkills() {
    this.appService.getSkills().subscribe(
      (response) => {
        this.skills = response;
        this.skillsGroupedByType = this.groupSkillsByType(this.skills);

        console.log(response);
      },
      (error) => {
        console.error('Error loading work experiences:', error);
      }
    );
  }
  private groupSkillsByType(skills: Skill[]): { [type: string]: Skill[] } {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.type]) {
        acc[skill.type] = [];
      }
      acc[skill.type].push(skill);
      return acc;
    }, {} as { [type: string]: Skill[] });
  }
}
