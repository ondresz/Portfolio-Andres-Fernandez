// src/core/services/blog.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { personalData } from '@/utils/data/personal-data';
import { Blog } from '@/core/models/blog.model';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private http: HttpClient) { }

    getBlogs(): Observable<Blog[]> {
        return this.http
            .get<Blog[]>(`https://dev.to/api/articles?username=${personalData.devUsername}`)
            .pipe(
                map(data => {
                    console.log('Raw blog data:', data);
                    return data || [];
                }),
                catchError(error => {
                    console.error('Error fetching blogs:', error);
                    return of([]);
                })
            );
    }
}