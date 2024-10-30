import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../environment/environment';
import { Profile } from './model/profile.model';
import { WorkExperience } from './model/work-experience.model';
import { Skill } from './model/skills.model';
import { Project } from './model/projects.model';
import { MyService } from './model/my_services.model';
import { Education } from './model/education.model';
import { ContactMe } from './model/contact_me';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // profile
  createProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiUrl}/profiles`, profile, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getProfiles(): Observable<Profile[]> {
    return this.http
      .get<Profile[]>(`${this.apiUrl}/profiles`)
      .pipe(catchError(this.handleError<Profile[]>('getProfiles', [])));
  }

  getProfileById(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profiles/${id}`);
  }

  updateProfile(id: number, profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/profiles/${id}`, profile, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // work-experience
  createWorkExperience(
    workExperience: WorkExperience
  ): Observable<WorkExperience> {
    return this.http.post<WorkExperience>(
      `${this.apiUrl}/workexperience`,
      workExperience,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  getWorkExperiences(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(`${this.apiUrl}/workexperience`);
  }

  getWorkExperienceById(id: number): Observable<WorkExperience> {
    return this.http.get<WorkExperience>(
      `${this.apiUrl}/workexperience/${id}`
    );
  }

  updateWorkExperience(
    id: number,
    workExperience: WorkExperience
  ): Observable<WorkExperience> {
    return this.http.put<WorkExperience>(
      `${this.apiUrl}/workexperience/${id}`,
      workExperience,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  deleteWorkExperience(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/workexperience/${id}`);
  }

  // skills
  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/skills`, skill, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`);
  }

  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/skills/${id}`);
  }

  updateSkill(id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/skills/${id}`, skill, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteSkill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/skills/${id}`);
  }

  // projects
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/projects`, project, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/projects/${id}`, project, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${id}`);
  }

  // my_services
  createMyService(service: MyService): Observable<MyService> {
    return this.http.post<MyService>(`${this.apiUrl}/myservices`, service, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getMyServices(): Observable<MyService[]> {
    return this.http.get<MyService[]>(`${this.apiUrl}/myservices`);
  }

  getMyServiceById(id: number): Observable<MyService> {
    return this.http.get<MyService>(`${this.apiUrl}/myservices/${id}`);
  }

  updateMyService(id: number, service: MyService): Observable<MyService> {
    return this.http.put<MyService>(
      `${this.apiUrl}/myservices/${id}`,
      service,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  deleteMyService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/myservices/${id}`);
  }

  // education
  createEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiUrl}/education`, education, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/education`);
  }

  getEducationById(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.apiUrl}/education/${id}`);
  }

  updateEducation(id: number, education: Education): Observable<Education> {
    return this.http.put<Education>(
      `${this.apiUrl}/education/${id}`,
      education,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  deleteEducation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/education/${id}`);
  }

  // ContactMe
  createContact(contact: ContactMe): Observable<ContactMe> {
    return this.http.post<ContactMe>(`${this.apiUrl}/contactme`, contact, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getContacts(): Observable<ContactMe[]> {
    return this.http.get<ContactMe[]>(`${this.apiUrl}/contactme`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
