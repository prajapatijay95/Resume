import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface SectionModel {
  icon?: any;
  title?: string;
  subTitle?: string;
  hide?: boolean;
  contents: {
    icon?: any;
    title?: string;
    content: string;
  }[];
}

@Component({
  selector: 'app-section',
  template: `
    <div class="section" *ngFor="let info of information">
      <div class="section-icon-container" *ngIf="info.icon && !info.hide">
        <div class="section-icon">
          <fa-icon
            [border]="false"
            [fixedWidth]="true"
            [icon]="info.icon"
            size="lg"
          ></fa-icon>
        </div>
        <div class="section-icon-border"><div></div></div>
      </div>
      <div class="section-container" *ngIf="!info.hide">
        <div class="section-title uppercase">
          {{ info.title }}
          <sub *ngIf="info.subTitle">{{ info.subTitle }}</sub>
        </div>
        <div class="section-content" *ngFor="let content of info.contents">
          <div class="icon" *ngIf="content.icon">
            <fa-icon
              [border]="false"
              [fixedWidth]="true"
              [icon]="content.icon"
              size="sm"
            ></fa-icon>
          </div>
          <div class="description">
            <div class="description-title" *ngIf="content.title">
              {{ content.title }}
            </div>
            <div
              class="description-text"
              [innerHTML]="sanitizeHTML(content.content)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input('information') information: SectionModel[] = [];
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  sanitizeHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
