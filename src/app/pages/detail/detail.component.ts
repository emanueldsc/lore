import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { marked } from 'marked';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { DetailComponent } from '../../components/detail/detail.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { Content } from '../../models/Content.model';
import { ContentLoaderService } from '../../services/content-loader.service';
import { TypeCardCategory } from '../../models/TypeCard.enum';

@Component({
  selector: 'lore-detail-page',
  standalone: true,
  imports: [
    CarouselComponent,
    DetailComponent,
    TabsComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailPageComponent implements OnInit {

  content: Content = {
    name: '',
    images: [],
    lore: '',
    stats: {}
  }

  constructor(
    private contentService: ContentLoaderService,
    private activate: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(({ type, content }) => {
      const path = `assets/content/${type}/${content}/${content}.md`
      this.contentService.getMarkdownContent(path).subscribe(markdown => {
        this.content = this.toContent(markdown, type, content)
      })
    })
  }

  toContent(markdown: string, type: TypeCardCategory, content: string): Content {
    const sections = markdown.split(/^---$/gm).map((section) => section.trim())

    const data: Content = {
      name: '',
      images: [],
      lore: '',
      stats: {}
    } 

    sections.forEach((section, index) => {
      const lines = section.split('\n').map(line => line.trim())
      if (index === 0) {
        data.name = lines[0];
        const imageUrls = lines.slice(1)
          .filter(line => line.startsWith('!['))
          .map(line => {
            const match = line.match(/\((.*?)\)/)
            return match ? match[1].replace('../../', 'assets/') : null
          })
          .filter(url => url) as string[]
        data.images = imageUrls.map(img => `assets/content/${type}/${content}/${img}`)
      } else if (/Ficha \(D20\)/i.test(lines[0])) {
        data.stats['D20'] = this.parseSectionAsHtml(lines.slice(1))
      } else if (/Ficha \(3D&T\)/i.test(lines[0])) {
        data.stats['3D&T'] = this.parseSectionAsHtml(lines.slice(1))
      } else if (/Lore/i.test(lines[0])) {
        data.lore = lines.slice(1).join('\n') 
      }
    })

    if (data.lore) {
      data.lore = marked(data.lore) as string
    }

    return data
  }

  private parseSectionAsHtml(lines: string[]): string  {
    const html = marked(lines.join('\n')) as string
    return html;
  }
  

}
