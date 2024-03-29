import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Ensure the path is correct
import { FooterComponent } from './footer/footer.component'; // Ensure the path is correct


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wood Vikings';
  // Function to handle smooth scrolling to a section
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Function to scroll down one viewport height
  scrollToNextScreen(): void {
    console.log('Scrolling to next screen');
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}
