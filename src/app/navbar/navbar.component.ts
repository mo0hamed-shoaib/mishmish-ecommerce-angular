import {
  Component,
  OnInit,
  afterNextRender,
  HostListener,
  signal,
  computed,
  effect,
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isDarkMode = signal<boolean>(false);
  isDropdownOpen = signal<boolean>(false);
  logoUrl = signal<string>('images/logo-no-bg.png');

  // Initialize signals with default values
  currentUser = signal<User | null>(null);
  isAuthenticated = computed(() => !!this.currentUser());

  constructor(private authService: AuthService, private router: Router) {
    // Initialize dark mode state
    afterNextRender(() => {
      this.initializeDarkMode();
    });
  }

  ngOnInit() {
    // Subscribe to user changes and update the signal
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser.set(user);
    });
  }

  private initializeDarkMode(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const isDark =
        localStorage.getItem('color-theme') === 'dark' ||
        (!localStorage.getItem('color-theme') &&
          document.documentElement.classList.contains('dark'));
      this.isDarkMode.set(isDark);
    }
  }

  toggleDarkMode(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const newDarkMode = !this.isDarkMode();

      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      this.isDarkMode.set(newDarkMode);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  toggleDropdown(): void {
    if (this.isAuthenticated() && this.currentUser()) {
      this.isDropdownOpen.update((open) => !open);
    }
  }

  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (
      !target.closest('#user-menu-button') &&
      !target.closest('.dropdown-menu')
    ) {
      this.isDropdownOpen.set(false);
    }
  }
}
